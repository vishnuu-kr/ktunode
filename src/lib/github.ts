import { kv } from "@vercel/kv";

export function isServerless(): boolean {
  return !!process.env.VERCEL || !!process.env.AWS_REGION;
}

export async function readFromKV<T>(key: string): Promise<T | null> {
  try {
    return await kv.get<T>(key);
  } catch {
    return null;
  }
}

export async function writeToKV(key: string, value: unknown): Promise<void> {
  await kv.set(key, value);
}
