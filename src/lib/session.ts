import crypto from "crypto";
import { readFromKV, writeToKV, deleteFromKV } from "./github";

const SESSION_PREFIX = "session:";
const LOCKDOWN_PREFIX = "lockdown-session:";
const RATE_LIMIT_PREFIX = "ratelimit:";

function generateToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

function hashToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

// --- Admin Sessions ---

export async function createAdminSession(): Promise<string> {
  const token = generateToken();
  const tokenHash = hashToken(token);
  await writeToKV(`${SESSION_PREFIX}${tokenHash}`, {
    createdAt: Date.now(),
  });
  return token;
}

export async function validateAdminSession(token: string): Promise<boolean> {
  const tokenHash = hashToken(token);
  const session = await readFromKV(`${SESSION_PREFIX}${tokenHash}`);
  return session !== null;
}

export async function deleteAdminSession(token: string): Promise<void> {
  const tokenHash = hashToken(token);
  await deleteFromKV(`${SESSION_PREFIX}${tokenHash}`);
}

// --- Lockdown Sessions ---

export async function createLockdownSession(): Promise<string> {
  const token = generateToken();
  const tokenHash = hashToken(token);
  await writeToKV(`${LOCKDOWN_PREFIX}${tokenHash}`, { createdAt: Date.now() });
  return token;
}

export async function validateLockdownSession(token: string): Promise<boolean> {
  const tokenHash = hashToken(token);
  const session = await readFromKV(`${LOCKDOWN_PREFIX}${tokenHash}`);
  return session !== null;
}

// --- Rate Limiting ---

export async function checkRateLimit(
  key: string,
  maxAttempts: number,
  windowMs: number
): Promise<{ allowed: boolean; remaining: number }> {
  const now = Date.now();
  const rateKey = `${RATE_LIMIT_PREFIX}${key}`;
  const data = await readFromKV<{ count: number; resetAt: number }>(rateKey);

  if (!data || now > data.resetAt) {
    await writeToKV(rateKey, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxAttempts - 1 };
  }

  if (data.count >= maxAttempts) {
    return { allowed: false, remaining: 0 };
  }

  data.count += 1;
  await writeToKV(rateKey, data);
  return { allowed: true, remaining: maxAttempts - data.count };
}
