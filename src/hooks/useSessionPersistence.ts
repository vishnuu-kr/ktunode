"use client";

import { useState, useEffect, useCallback } from "react";
import {
  type SavedSession,
  STORAGE_KEY,
  validateSession,
} from "@/types/session";

/**
 * Return type for the useSessionPersistence hook.
 */
export interface UseSessionPersistenceReturn {
  savedSession: SavedSession | null;
  saveSession: (branch: string, semester: number) => void;
  clearSession: () => void;
}

/**
 * Custom hook that encapsulates localStorage read/write logic for the saved session.
 * Provides a reactive interface for persisting, retrieving, and clearing session data.
 *
 * - Reads from localStorage on mount (client-side only, SSR-safe)
 * - Validates stored data before returning; removes invalid entries
 * - Wraps all localStorage operations in try/catch for graceful degradation
 */
export default function useSessionPersistence(): UseSessionPersistenceReturn {
  const [savedSession, setSavedSession] = useState<SavedSession | null>(null);

  // Read from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setSavedSession(null);
        return;
      }

      const parsed = JSON.parse(raw);
      if (validateSession(parsed)) {
        setSavedSession(parsed);
      } else {
        // Invalid data — clean up
        localStorage.removeItem(STORAGE_KEY);
        setSavedSession(null);
      }
    } catch {
      // Corrupted JSON or localStorage unavailable — clean up
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Fail silently if removeItem also throws
      }
      setSavedSession(null);
    }
  }, []);

  /**
   * Persists a valid session to localStorage.
   * Validates before writing; does nothing if inputs are invalid.
   * Wrapped in try/catch so navigation is never blocked.
   */
  const saveSession = useCallback((branch: string, semester: number): void => {
    const session: SavedSession = { branch, semester };
    if (!validateSession(session)) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
      setSavedSession(session);
    } catch {
      // Storage full or unavailable — fail silently
    }
  }, []);

  /**
   * Removes the saved session from localStorage and updates state.
   * Wrapped in try/catch; always updates state to hide the button
   * even if localStorage.removeItem throws.
   */
  const clearSession = useCallback((): void => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Fail silently
    }
    // Always update state regardless of localStorage success
    setSavedSession(null);
  }, []);

  return { savedSession, saveSession, clearSession };
}
