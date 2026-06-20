import { describe, it, expect } from "vitest";
import { validateSession } from "../../types/session";

describe("Onboarding Flow - Session Validation", () => {
  it("should validate a correct session object", () => {
    const valid = { branch: "cs", semester: 3 };
    expect(validateSession(valid)).toBe(true);
  });

  it("should reject a session object with invalid branch", () => {
    const invalidBranch = { branch: "invalid-branch", semester: 3 };
    expect(validateSession(invalidBranch)).toBe(false);
  });

  it("should reject a session object with invalid semester", () => {
    const invalidSemLow = { branch: "cs", semester: 0 };
    const invalidSemHigh = { branch: "cs", semester: 9 };
    const invalidSemFloat = { branch: "cs", semester: 3.5 };
    expect(validateSession(invalidSemLow)).toBe(false);
    expect(validateSession(invalidSemHigh)).toBe(false);
    expect(validateSession(invalidSemFloat)).toBe(false);
  });

  it("should reject non-object or null sessions", () => {
    expect(validateSession(null)).toBe(false);
    expect(validateSession(undefined)).toBe(false);
    expect(validateSession([])).toBe(false);
    expect(validateSession("string")).toBe(false);
  });
});
