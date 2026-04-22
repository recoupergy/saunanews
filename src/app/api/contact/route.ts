import { NextRequest, NextResponse } from 'next/server';

import { ContactInput, InputValidationError, normalizeContactInput, parseJsonWithLimit } from '@/lib/api-input';
import { enqueueFallback } from '@/lib/fallback-queue';

const INBOX = 'hello@saunanews.com';
const AGENTMAIL_BASE = 'https://api.agentmail.to/v0';
const MAX_CONTACT_BODY_BYTES = 20 * 1024;
const CONTACT_TIMEOUT_MS = 10_000;
const CONTACT_MAX_ATTEMPTS = 2;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getRequestId(request: NextRequest) {
  return request.headers.get('x-request-id') ?? crypto.randomUUID();
}

function logEvent(level: 'info' | 'warn' | 'error', event: string, details: Record<string, unknown>) {
  const payload = {
    route: '/api/contact',
    event,
    ...details,
  };

  if (level === 'error') {
    console.error(payload);
  } else if (level === 'warn') {
    console.warn(payload);
  } else {
    console.info(payload);
  }
}

function buildMessageContent(input: ContactInput) {
  const safeName = escapeHtml(input.name);
  const safeOrganization = input.organization ? escapeHtml(input.organization) : undefined;
  const safeEmail = escapeHtml(input.email);
  const safeType = escapeHtml(input.inquiryType);
  const safeMessage = escapeHtml(input.message).replace(/\n/g, '<br />');

  return {
    subject: `[${input.inquiryType}] ${input.name}${input.organization ? ` — ${input.organization}` : ''}`,
    html: `
      <p><strong>From:</strong> ${safeName}${safeOrganization ? ` (${safeOrganization})` : ''}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Type:</strong> ${safeType}</p>
      <hr />
      <p>${safeMessage}</p>
    `,
    text: `From: ${input.name}${input.organization ? ` (${input.organization})` : ''}\nEmail: ${input.email}\nType: ${input.inquiryType}\n\n${input.message}`,
  };
}

async function sendWithTimeout(url: string, init: RequestInit, timeoutMs: number) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

function shouldRetry(error: unknown, response: Response | undefined, attempt: number) {
  if (attempt >= CONTACT_MAX_ATTEMPTS) {
    return false;
  }

  if (error) {
    return true;
  }

  if (!response) {
    return false;
  }

  return response.status >= 500;
}

export async function POST(request: NextRequest) {
  let input: ContactInput | undefined;
  const requestId = getRequestId(request);

  try {
    const payload = await parseJsonWithLimit<Record<string, unknown>>(request, MAX_CONTACT_BODY_BYTES);
    input = normalizeContactInput(payload);

    // Honeypot — bots fill hidden fields, humans don't
    if (input.website) {
      logEvent('warn', 'contact_honeypot_triggered', { requestId });
      return NextResponse.json({ success: true, requestId });
    }

    const apiKey = process.env.AGENTMAIL_API_KEY;

    if (!apiKey) {
      await enqueueFallback({
        type: 'contact',
        queuedAt: new Date().toISOString(),
        reason: 'agentmail_not_configured',
        payload: { ...input, requestId },
      });

      return NextResponse.json({
        success: true,
        message: "Thanks — we'll be in touch shortly.",
        requestId,
      });
    }

    const content = buildMessageContent(input);
    const startedAt = Date.now();

    let response: Response | undefined;
    let latestError: unknown;

    for (let attempt = 1; attempt <= CONTACT_MAX_ATTEMPTS; attempt += 1) {
      latestError = undefined;

      try {
        response = await sendWithTimeout(
          `${AGENTMAIL_BASE}/inboxes/${encodeURIComponent(INBOX)}/messages/send`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: [INBOX],
              replyTo: `${input.name} <${input.email}>`,
              subject: content.subject,
              html: content.html,
              text: content.text,
            }),
          },
          CONTACT_TIMEOUT_MS,
        );
      } catch (error) {
        latestError = error;
      }

      if (!shouldRetry(latestError, response, attempt)) {
        break;
      }

      logEvent('warn', 'contact_send_retry', {
        requestId,
        attempt,
        status: response?.status,
        error: latestError instanceof Error ? latestError.message : latestError,
      });
    }

    const latencyMs = Date.now() - startedAt;

    if (!response || latestError || !response.ok) {
      const errText = response && !response.ok ? await response.text() : undefined;
      await enqueueFallback({
        type: 'contact',
        queuedAt: new Date().toISOString(),
        reason: `agentmail_send_failed:${response?.status ?? 'network'}`,
        payload: {
          ...input,
          requestId,
          latencyMs,
          deliveryError: errText ?? (latestError instanceof Error ? latestError.message : String(latestError)),
        },
      });

      logEvent('warn', 'contact_delivery_fallback', {
        requestId,
        status: response?.status,
        latencyMs,
      });

      return NextResponse.json({
        success: true,
        message: "Thanks — we'll be in touch shortly.",
        requestId,
      });
    }

    logEvent('info', 'contact_send_success', { requestId, latencyMs });

    return NextResponse.json({
      success: true,
      message: "Thanks — we'll be in touch shortly.",
      requestId,
    });
  } catch (err) {
    if (err instanceof InputValidationError) {
      return NextResponse.json(
        { success: false, message: err.message, requestId },
        { status: err.status, headers: { 'x-request-id': requestId } }
      );
    }

    if (input) {
      try {
        await enqueueFallback({
          type: 'contact',
          queuedAt: new Date().toISOString(),
          reason: 'contact_processing_error',
          payload: {
            ...input,
            requestId,
            error: err instanceof Error ? err.message : String(err),
          },
        });
      } catch (queueError) {
        logEvent('error', 'contact_queue_error', {
          requestId,
          error: queueError instanceof Error ? queueError.message : String(queueError),
        });
      }
    }

    logEvent('error', 'contact_form_error', {
      requestId,
      error: err instanceof Error ? err.message : String(err),
    });

    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.', requestId },
      { status: 500, headers: { 'x-request-id': requestId } }
    );
  }
}
