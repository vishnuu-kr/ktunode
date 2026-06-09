const REQUIRED_ENV_VARS = {
  production: ["ADMIN_SECRET_KEY", "KV_REST_API_URL", "KV_REST_API_TOKEN"],
  development: ["ADMIN_SECRET_KEY"],
} as const;

interface EnvValidation {
  valid: boolean;
  missing: string[];
  warnings: string[];
}

export function validateEnvironment(): EnvValidation {
  const isProd = process.env.NODE_ENV === "production";
  const required = isProd
    ? REQUIRED_ENV_VARS.production
    : REQUIRED_ENV_VARS.development;

  const missing: string[] = [];
  const warnings: string[] = [];

  for (const envVar of required) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  const optionalVars = [
    "NEXT_PUBLIC_POSTHOG_KEY",
    "NEXT_PUBLIC_SITE_URL",
    "NEXT_PUBLIC_POSTHOG_HOST",
  ];

  for (const envVar of optionalVars) {
    if (!process.env[envVar]) {
      warnings.push(`${envVar} is not set — some features may be limited`);
    }
  }

  if (process.env.ADMIN_SECRET_KEY && process.env.ADMIN_SECRET_KEY.length < 8) {
    warnings.push("ADMIN_SECRET_KEY is shorter than 8 characters — consider a stronger secret");
  }

  if (
    process.env.ADMIN_SECRET_KEY &&
    (process.env.ADMIN_SECRET_KEY === "1234" ||
      process.env.ADMIN_SECRET_KEY === "admin" ||
      process.env.ADMIN_SECRET_KEY === "secret")
  ) {
    warnings.push("ADMIN_SECRET_KEY is a common default — change it immediately");
  }

  return {
    valid: missing.length === 0,
    missing,
    warnings,
  };
}

let loggedOnce = false;

export function logEnvironmentStatus() {
  if (loggedOnce) return;
  loggedOnce = true;

  const result = validateEnvironment();

  if (!result.valid) {
    console.error("[ENV VALIDATION] CRITICAL: Missing required environment variables:");
    for (const v of result.missing) {
      console.error(`  - ${v}`);
    }
  }

  if (result.warnings.length > 0) {
    console.warn("[ENV VALIDATION] Warnings:");
    for (const w of result.warnings) {
      console.warn(`  - ${w}`);
    }
  }

  if (result.valid && result.warnings.length === 0) {
    console.log("[ENV VALIDATION] All checks passed.");
  }
}
