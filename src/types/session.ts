/**
 * Session persistence types, constants, and validation logic.
 * Used by the "Continue with Session" feature to persist and validate
 * the user's last branch/semester selection.
 */

import { MAX_SEMESTER } from "@/lib/constants";

/** Valid branch identifiers for KTU Node */
export const VALID_BRANCHES = ["cs", "ec", "me", "ce", "ee"] as const;

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
