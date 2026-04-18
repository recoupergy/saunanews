import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

interface QueueItem {
  type: 'subscribe' | 'contact';
  queuedAt: string;
  payload: unknown;
  reason: string;
}

const DEFAULT_QUEUE_DIR = path.join(process.cwd(), '.queue');

function getQueueFilePath() {
  return path.join(process.env.FALLBACK_QUEUE_DIR ?? DEFAULT_QUEUE_DIR, 'pending.jsonl');
}

export async function enqueueFallback(item: QueueItem) {
  const queuePath = getQueueFilePath();
  await mkdir(path.dirname(queuePath), { recursive: true });
  await appendFile(queuePath, `${JSON.stringify(item)}\n`, 'utf8');
}
