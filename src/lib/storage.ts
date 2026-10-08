/**
 * Local-storage helpers.
 *
 * Used for demo progress, bookmarks, theme, and UI
 * preferences. Not a substitute for secure
 * authentication — never store sensitive data here.
 */

const PREFIX = "manetho:";

export function storageGet<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function storageSet(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage unavailable (private mode, quota) — fail silently.
  }
}

export function storageRemove(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(PREFIX + key);
  } catch {
    // ignore
  }
}

/** Remove Manetho-owned values without touching other apps on this origin. */
export function storageClear(): void {
  if (typeof window === "undefined") return;
  try {
    const keys = Object.keys(window.localStorage).filter((key) => key.startsWith(PREFIX));
    keys.forEach((key) => window.localStorage.removeItem(key));
  } catch {
    // Storage unavailable (private mode, quota) — fail silently.
  }
}
