export function isServerless(): boolean {
  return !!process.env.VERCEL || !!process.env.AWS_REGION;
}

async function getKv() {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return null;
  }
  const { kv } = await import("@vercel/kv");
  return kv;
}

export async function readFromKV<T>(key: string): Promise<T | null> {
  try {
    const kvClient = await getKv();
    if (!kvClient) return null;
    return await kvClient.get<T>(key);
  } catch {
    return null;
  }
}

export async function writeToKV(key: string, value: unknown): Promise<void> {
  try {
    const kvClient = await getKv();
    if (!kvClient) return;
    await kvClient.set(key, value);
  } catch (error) {
    console.error(`Failed to write KV key "${key}":`, error);
    throw error;
  }
}

export async function deleteFromKV(key: string): Promise<void> {
  try {
    const kvClient = await getKv();
    if (!kvClient) return;
    await kvClient.del(key);
  } catch (error) {
    console.error(`Failed to delete KV key "${key}":`, error);
    throw error;
  }
}
