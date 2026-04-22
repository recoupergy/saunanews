import { createHash } from 'node:crypto';
import { appendFile, mkdir, readFile, rename, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

interface QueueItem {
  type: 'subscribe' | 'contact' | 'social';
  queuedAt: string;
  payload: unknown;
  reason: string;
}

const DEFAULT_QUEUE_DIR = path.join(process.cwd(), '.queue');
const MAX_QUEUE_FILE_BYTES = Number(process.env.FALLBACK_QUEUE_MAX_BYTES ?? 5 * 1024 * 1024);
const DEFAULT_RETENTION_DAYS = Number(process.env.FALLBACK_QUEUE_RETENTION_DAYS ?? 14);

function getQueueFilePath() {
  return path.join(process.env.FALLBACK_QUEUE_DIR ?? DEFAULT_QUEUE_DIR, 'pending.jsonl');
}

function maskEmail(email: string) {
  const [local = '', domain = ''] = email.split('@');
  if (!local || !domain) {
    return '[redacted-email]';
  }

  const localPrefix = local.length <= 2 ? local[0] : `${local[0]}***${local[local.length - 1]}`;
  return `${localPrefix}@${domain}`;
}

function hashValue(value: string) {
  return createHash('sha256').update(value).digest('hex');
}

function redactPayload(payload: unknown) {
  if (!payload || typeof payload !== 'object') {
    return payload;
  }

  const input = payload as Record<string, unknown>;
  const output: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(input)) {
    if (key === 'message' && typeof value === 'string') {
      output.messagePreview = `${value.slice(0, 120)}${value.length > 120 ? '…' : ''}`;
      output.messageHash = hashValue(value);
      continue;
    }

    if (key === 'email' && typeof value === 'string') {
      output.email = maskEmail(value);
      output.emailHash = hashValue(value);
      continue;
    }

    if (key === 'ip' && typeof value === 'string') {
      output.ipHash = hashValue(value);
      continue;
    }

    output[key] = value;
  }

  return output;
}

async function rotateIfNeeded(queuePath: string) {
  try {
    const queueStat = await stat(queuePath);
    if (queueStat.size <= MAX_QUEUE_FILE_BYTES) {
      return;
    }

    const backupPath = `${queuePath}.bak`;
    await rename(queuePath, backupPath);
    await writeFile(queuePath, '', 'utf8');
  } catch {
    // file may not exist yet; ignore
  }
}

async function compactQueue(queuePath: string) {
  const retentionDays = Number.isFinite(DEFAULT_RETENTION_DAYS) ? DEFAULT_RETENTION_DAYS : 14;
  const retentionMs = Math.max(retentionDays, 1) * 24 * 60 * 60 * 1000;
  const cutoff = Date.now() - retentionMs;

  try {
    const raw = await readFile(queuePath, 'utf8');
    const kept = raw
      .split('\n')
      .filter(Boolean)
      .filter((line) => {
        try {
          const parsed = JSON.parse(line) as QueueItem;
          return Date.parse(parsed.queuedAt) >= cutoff;
        } catch {
          return false;
        }
      });

    await writeFile(queuePath, kept.length > 0 ? `${kept.join('\n')}\n` : '', 'utf8');
  } catch {
    // Best effort compaction only.
  }
}

export async function enqueueFallback(item: QueueItem) {
  const queuePath = getQueueFilePath();
  await mkdir(path.dirname(queuePath), { recursive: true });

  await rotateIfNeeded(queuePath);

  const payload = process.env.FALLBACK_QUEUE_REDACT === 'false'
    ? item.payload
    : redactPayload(item.payload);

  await appendFile(queuePath, `${JSON.stringify({ ...item, payload })}\n`, 'utf8');

  // Compaction is best effort and intentionally not awaited by caller semantics.
  void compactQueue(queuePath);
}
