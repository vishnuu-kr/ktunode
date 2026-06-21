/**
 * Session persistence types, constants, and validation logic.
 * Used by the "Continue with Session" feature to persist and validate
 * the user's last branch/semester selection.
 */

import { MAX_SEMESTER } from "@/lib/constants";

/** Valid branch identifiers for KTU Node */
export const VALID_BRANCHES = [
  "aeronautical-engineering",
  "agriculture-engineering",
  "applied-electronics-and-instrumentation",
  "artificial-intelligence",
  "artificial-intelligence-and-machine-learning",
  "artificial-intelligence-and-data-science",
  "automobile-engineering",
  "biomedical-and-robotic-engineering",
  "biomedical-engineering",
  "biotechnology-engineering",
  "biotechnology-and-biochemical-engineering",
  "chemical-engineering",
  "civil-engineering",
  "civil-and-environmental-engineering",
  "computer-science-and-business-systems",
  "computer-science-and-design",
  "computer-science-and-engineering",
  "computer-science-and-engineering-ai-and-ml",
  "computer-science-and-engineering-artificial-intelligence",
  "computer-science-and-engineering-cyber-security",
  "computer-science-and-engineering-data-science",
  "computer-science-and-engineering-internet-of-things-and-cyber-security-including-blockchain-technology",
  "computer-science-and-engineering-iot",
  "computer-science-and-engineering-and-business-systems",
  "cyber-physical-systems",
  "electrical-and-computer-engineering",
  "electrical-and-electronics-engineering",
  "electronics-and-biomedical-engineering",
  "electronics-and-communication-advanced-communication-technology",
  "electronics-and-communication-engineering",
  "electronics-and-computer-engineering",
  "electronics-engineering-vlsi-design-and-technology",
  "electronics-and-instrumentation",
  "food-technology",
  "industrial-engineering",
  "information-technology",
  "instrumentation-and-control",
  "mechanical-automobile-engineering",
  "mechanical-engineering",
  "mechatronics-engineering",
  "naval-architecture-and-shipbuilding-engineering",
  "polymer-engineering",
  "production-engineering",
  "robotics-and-artificial-intelligence",
  "robotics-and-automation",
  "safety-and-fire-engineering"
] as const;

/** Type representing a valid branch ID */
export type BranchId = (typeof VALID_BRANCHES)[number];

/** localStorage key for persisted session data */
export const STORAGE_KEY = "ktunode-session";

/** Represents a saved user session with branch and semester */
export interface SavedSession {
  branch: string;
  semester: number;
}

/**
 * Type guard that validates unknown data conforms to the SavedSession interface.
 * Returns true only when:
 * - data is a non-null plain object
 * - data.branch is a string matching one of VALID_BRANCHES
 * - data.semester is an integer between 1 and 8 inclusive
 */
export function validateSession(data: unknown): data is SavedSession {
  if (data === null || data === undefined || typeof data !== "object") {
    return false;
  }

  // Reject arrays and other non-plain objects
  if (Array.isArray(data)) {
    return false;
  }

  const obj = data as Record<string, unknown>;

  // Validate branch
  if (typeof obj.branch !== "string") return false;
  if (!(VALID_BRANCHES as readonly string[]).includes(obj.branch)) return false;

  // Validate semester
  if (typeof obj.semester !== "number") return false;
  if (!Number.isInteger(obj.semester)) return false;
  if (obj.semester < 1 || obj.semester > MAX_SEMESTER) return false;

  return true;
}

/**
 * Returns the uppercase short label for a branch ID.
 * For known branches, returns the uppercase version (e.g., "cs" → "CS").
 * For unknown branch IDs, falls back to branchId.toUpperCase().
 */
export function getBranchShortLabel(branchId: string): string {
  return branchId.toUpperCase();
}
