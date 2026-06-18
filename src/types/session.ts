/**
 * Session persistence types, constants, and validation logic.
 * Used by the "Continue with Session" feature to persist and validate
 * the user's last branch/semester selection.
 */

import { MAX_SEMESTER } from "@/lib/constants";

/** Valid branch identifiers for KTU Node */
export const VALID_BRANCHES = [
  "cs",
  "ce",
  "ec",
  "ee",
  "me",
  "artificial-intelligence",
  "artificial-intelligence-and-data-science",
  "artificial-intelligence-and-machine-learning",
  "cs-and-business-systems",
  "cs-and-design",
  "cse-artificial-intelligence-and-data-science",
  "cse-block-chain",
  "cse-cyber-security",
  "cse-internet-of-things-cse-iot",
  "cse-iot-and-cs-including-block-chain-technology",
  "computer-science-and-business-systems",
  "computer-science-and-design",
  "computer-science-and-engineering",
  "computer-science-and-engineering-artificial-intelligence-and-data-science",
  "computer-science-and-engineering-artificial-intelligence-and-machine-learning",
  "computer-science-and-engineering-artificial-intelligence",
  "computer-science-and-engineering-cyber-security",
  "computer-science-and-engineering-data-science",
  "computer-science-and-engineering-iot",
  "computer-science-and-engineering-and-business-systems",
  "cyber-security",
  "information-technology",
  "civil-engineering",
  "civil-and-environmental-engineering",
  "applied-electronics-instrumentation-engineering",
  "biomedical-robotics-engineering",
  "biomedical-engineering",
  "cyber-physical-system",
  "electronics-biomedical",
  "electronics-communication-engineering",
  "electronics-instrumentation-engineering",
  "electronics-engineering-vlsi-design-and-technology",
  "electronics-and-biomedical-engineering",
  "electronics-and-communication-advanced-communication-technology",
  "electronics-and-communication-engineering",
  "electronics-and-computer-engineering",
  "instrumentation-and-control-engineering",
  "robotics-and-artificial-intelligence",
  "robotics-and-automation",
  "electrical-and-computer-engineering",
  "electrical-and-electronics-engineering",
  "aeronautical-engineering",
  "automobile-engineering",
  "chemical-engineering",
  "food-technology",
  "industrial-engineering",
  "mechanical-engineering",
  "mechanical-engineering-auto",
  "mechanical-engineering-automobile",
  "mechatronics-engineering",
  "metallurgical-materials-engineering",
  "naval-architecture-ship-building-engineering",
  "polymer-engineering",
  "production-engineering",
  "safety-and-fire-engineering",
  "agriculture-engineering",
  "biotechnology",
  "biotechnology-and-biochemical-engineering"
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
