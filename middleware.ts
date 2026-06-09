import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 100;
const ADMIN_RATE_LIMIT_MAX = 20;
const LOGIN_RATE_LIMIT_MAX = 5;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getRateLimit(key: string, max: number): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: max - 1 };
  }

  entry.count++;
  if (entry.count > max) {
    return { allowed: false, remaining: 0 };
  }
  return { allowed: true, remaining: max - entry.count };
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isStaticAsset(pathname: string): boolean {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/notes/") ||
    pathname.includes(".") && (
      pathname.endsWith(".js") ||
      pathname.endsWith(".css") ||
      pathname.endsWith(".png") ||
      pathname.endsWith(".jpg") ||
      pathname.endsWith(".jpeg") ||
      pathname.endsWith(".gif") ||
      pathname.endsWith(".svg") ||
      pathname.endsWith(".ico") ||
      pathname.endsWith(".woff") ||
      pathname.endsWith(".woff2") ||
      pathname.endsWith(".ttf")
    )
  );
}

const SECURITY_HEADERS: Record<string, string> = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-XSS-Protection": "1; mode=block",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getClientIp(request);

  const response = NextResponse.next();

  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }

  if (isStaticAsset(pathname)) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
    return response;
  }

  if (pathname.startsWith("/api/")) {
    const rateKey = `api:${ip}`;
    const { allowed, remaining } = getRateLimit(rateKey, RATE_LIMIT_MAX);
    response.headers.set("X-RateLimit-Limit", String(RATE_LIMIT_MAX));
    response.headers.set("X-RateLimit-Remaining", String(remaining));

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: response.headers }
      );
    }
  }

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const rateKey = `admin:${ip}`;
    const { allowed, remaining } = getRateLimit(rateKey, ADMIN_RATE_LIMIT_MAX);
    response.headers.set("X-RateLimit-Limit", String(ADMIN_RATE_LIMIT_MAX));
    response.headers.set("X-RateLimit-Remaining", String(remaining));

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many admin requests. Please try again later." },
        { status: 429, headers: response.headers }
      );
    }
  }

  if (pathname === "/api/auth") {
    const rateKey = `login:${ip}`;
    const { allowed, remaining } = getRateLimit(rateKey, LOGIN_RATE_LIMIT_MAX);
    response.headers.set("X-RateLimit-Limit", String(LOGIN_RATE_LIMIT_MAX));
    response.headers.set("X-RateLimit-Remaining", String(remaining));

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many login attempts. Please wait a minute." },
        { status: 429, headers: response.headers }
      );
    }
  }

  if (pathname === "/api/config") {
    const adminSecret = request.cookies.get("admin_secret")?.value;
    const correctSecret = process.env.ADMIN_SECRET_KEY;
    if (!adminSecret || adminSecret !== correctSecret) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
