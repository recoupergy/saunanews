import { NextRequest } from 'next/server';

const JSON_CONTENT_TYPE = 'application/json';

export class InputValidationError extends Error {
  readonly status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = 'InputValidationError';
    this.status = status;
  }
}

function assertJsonContentType(request: NextRequest) {
  const contentType = request.headers.get('content-type')?.toLowerCase() ?? '';

  if (!contentType.includes(JSON_CONTENT_TYPE)) {
    throw new InputValidationError('Request must use application/json.', 415);
  }
}

export async function parseJsonWithLimit<T>(request: NextRequest, maxBytes: number): Promise<T> {
  assertJsonContentType(request);

  const contentLength = request.headers.get('content-length');
  if (contentLength) {
    const declaredBytes = Number(contentLength);
    if (Number.isFinite(declaredBytes) && declaredBytes > maxBytes) {
      throw new InputValidationError('Request body is too large.', 413);
    }
  }

  const rawBody = await request.text();
  const actualBytes = new TextEncoder().encode(rawBody).length;
  if (actualBytes > maxBytes) {
    throw new InputValidationError('Request body is too large.', 413);
  }

  if (!rawBody.trim()) {
    throw new InputValidationError('Request body is required.');
  }

  try {
    return JSON.parse(rawBody) as T;
  } catch {
    throw new InputValidationError('Invalid JSON payload.');
  }
}

function normalizeOptionalString(value: unknown, maxLength: number) {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }

  return trimmed.slice(0, maxLength);
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export interface SubscribeInput {
  email: string;
  source: string;
  website?: string;
}

export function normalizeSubscribeInput(payload: unknown): SubscribeInput {
  if (!payload || typeof payload !== 'object') {
    throw new InputValidationError('Invalid request payload.');
  }

  const data = payload as Record<string, unknown>;
  const email = normalizeOptionalString(data.email, 320)?.toLowerCase();
  const source = normalizeOptionalString(data.source, 80) ?? 'website';
  const website = normalizeOptionalString(data.website, 80);

  if (!email) {
    throw new InputValidationError('Please enter your email address.');
  }

  if (!EMAIL_REGEX.test(email)) {
    throw new InputValidationError('Please enter a valid email address.');
  }

  return { email, source, website };
}

export interface ContactInput {
  name: string;
  email: string;
  message: string;
  organization?: string;
  inquiryType: string;
  website?: string;
}

export function normalizeContactInput(payload: unknown): ContactInput {
  if (!payload || typeof payload !== 'object') {
    throw new InputValidationError('Invalid request payload.');
  }

  const data = payload as Record<string, unknown>;
  const name = normalizeOptionalString(data.name, 120);
  const email = normalizeOptionalString(data.email, 320)?.toLowerCase();
  const message = normalizeOptionalString(data.message, 8000);
  const organization = normalizeOptionalString(data.organization, 140);
  const inquiryType = normalizeOptionalString(data.inquiryType, 80) ?? 'General';
  const website = normalizeOptionalString(data.website, 80);

  if (!name || !email || !message) {
    throw new InputValidationError('Name, email, and message are required.');
  }

  if (!EMAIL_REGEX.test(email)) {
    throw new InputValidationError('Please enter a valid email address.');
  }

  return {
    name,
    email,
    message,
    organization,
    inquiryType,
    website,
  };
}
