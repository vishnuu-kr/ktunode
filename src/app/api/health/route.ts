import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { validateAdminSession } from "@/lib/session";

export const dynamic = "force-dynamic";

interface HealthCheck {
  status: "healthy" | "degraded" | "unhealthy";
  timestamp: string;
  uptime: number;
  checks: {
    kv: { status: "ok" | "error"; latencyMs?: number; error?: string };
    env: { status: "ok" | "missing"; missing: string[] };
    config: { status: "ok" | "error"; error?: string };
    filesystem: { status: "ok" | "error"; error?: string };
  };
}

export async function GET() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("admin_session")?.value;
  if (!sessionToken || !(await validateAdminSession(sessionToken))) {
    return NextResponse.json({ status: "ok" });
  }

  const checks: HealthCheck["checks"] = {
    kv: { status: "ok" },
    env: { status: "ok", missing: [] },
    config: { status: "ok" },
    filesystem: { status: "ok" },
  };

  const requiredEnvVars = [
    "ADMIN_SECRET_KEY",
    "KV_REST_API_URL",
    "KV_REST_API_TOKEN",
    "NEXT_PUBLIC_POSTHOG_KEY",
  ];

  const optionalEnvVars = [
    "NEXT_PUBLIC_SITE_URL",
    "NEXT_PUBLIC_POSTHOG_HOST",
  ];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      checks.env.status = "missing";
      checks.env.missing.push(envVar);
    }
  }

  for (const envVar of optionalEnvVars) {
    if (!process.env[envVar]) {
      checks.env.missing.push(`${envVar} (optional)`);
    }
  }

  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      throw new Error("KV env vars not configured");
    }
    const kvStart = Date.now();
    const { kv } = await import("@vercel/kv");
    await kv.ping();
    checks.kv.latencyMs = Date.now() - kvStart;
  } catch (error: unknown) {
    checks.kv.status = "error";
    checks.kv.error = error instanceof Error ? error.message : "KV connection failed";
  }

  try {
    const { readSiteConfig } = await import("@/lib/siteConfig");
    const config = await readSiteConfig();
    if (!config || !config.siteName) {
      throw new Error("Config returned empty or invalid");
    }
  } catch (error: unknown) {
    checks.config.status = "error";
    checks.config.error = error instanceof Error ? error.message : "Config read failed";
  }

  try {
    const fs = await import("fs");
    const path = await import("path");
    const notesDir = path.join(process.cwd(), "public", "notes");
    if (!fs.existsSync(notesDir)) {
      throw new Error("Notes directory missing");
    }
    const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
    if (!fs.existsSync(subjectsDir)) {
      throw new Error("Subjects directory missing");
    }
  } catch (error: unknown) {
    checks.filesystem.status = "error";
    checks.filesystem.error = error instanceof Error ? error.message : "Filesystem check failed";
  }

  const hasError = Object.values(checks).some(
    (c) => "error" in c && c.error
  );

  const hasMissing = checks.env.status === "missing";

  const overallStatus: HealthCheck["status"] = hasError
    ? checks.kv.status === "error" ? "unhealthy" : "degraded"
    : hasMissing ? "degraded" : "healthy";

  const result: HealthCheck = {
    status: overallStatus,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    checks,
  };

  return NextResponse.json(result, {
    status: overallStatus === "unhealthy" ? 503 : 200,
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
