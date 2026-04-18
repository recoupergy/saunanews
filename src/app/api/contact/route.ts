import { NextRequest, NextResponse } from 'next/server';

import { ContactInput, InputValidationError, normalizeContactInput, parseJsonWithLimit } from '@/lib/api-input';
import { enqueueFallback } from '@/lib/fallback-queue';

const INBOX = 'hello@saunanews.com';
const AGENTMAIL_BASE = 'https://api.agentmail.to/v0';
const MAX_CONTACT_BODY_BYTES = 20 * 1024;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
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

export async function POST(request: NextRequest) {
  let input: ContactInput | undefined;

  try {
    const payload = await parseJsonWithLimit<Record<string, unknown>>(request, MAX_CONTACT_BODY_BYTES);
    input = normalizeContactInput(payload);

    // Honeypot — bots fill hidden fields, humans don't
    if (input.website) {
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.AGENTMAIL_API_KEY;

    if (!apiKey) {
      await enqueueFallback({
        type: 'contact',
        queuedAt: new Date().toISOString(),
        reason: 'agentmail_not_configured',
        payload: input,
      });

      return NextResponse.json({
        success: true,
        message: "Thanks — we'll be in touch shortly.",
      });
    }

    const content = buildMessageContent(input);

    const res = await fetch(
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
      }
    );

    if (!res.ok) {
      const err = await res.text();
      await enqueueFallback({
        type: 'contact',
        queuedAt: new Date().toISOString(),
        reason: `agentmail_send_failed:${res.status}`,
        payload: { ...input, deliveryError: err },
      });

      return NextResponse.json({
        success: true,
        message: "Thanks — we'll be in touch shortly.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thanks — we'll be in touch shortly.",
    });
  } catch (err) {
    if (err instanceof InputValidationError) {
      return NextResponse.json(
        { success: false, message: err.message },
        { status: err.status }
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
            error: err instanceof Error ? err.message : String(err),
          },
        });
      } catch (queueError) {
        console.error('[Contact Queue Error]', queueError);
      }
    }

    console.error('[Contact Form Error]', err);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
