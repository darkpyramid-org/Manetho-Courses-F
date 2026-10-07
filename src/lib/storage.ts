/**
 * Local-storage helpers.
 *
 * Used for demo progress, bookmarks, theme, and UI
 * preferences. Not a substitute for secure
 * authentication — never store sensitive data here.
 */

const PREFIX = "manetho:";

export function storageGet<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function storageSet(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage unavailable (private mode, quota) — fail silently.
  }
}

export function storageRemove(key: string): void {
  try {
    window.localStorage.removeItem(PREFIX + key);
  } catch {
    // ignore
  }
}
