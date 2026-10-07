import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { storageGet, storageRemove, storageSet } from "@/lib/storage";

/**
 * Bookmarks (saved courses).
 *
 * localStorage-backed until a backend exists.
 * The interface below is the seam for a future API.
 */

interface BookmarkRepository {
  isSaved(courseId: string): boolean;
  toggle(courseId: string): boolean;
  save(courseId: string): void;
  remove(courseId: string): void;
  getAll(): string[];
}

const BOOKMARKS_KEY = "bookmarks:v1";

interface BookmarkContextValue extends BookmarkRepository {
  saved: string[];
}

const BookmarkContext = createContext<BookmarkContextValue | null>(null);

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<string[]>(() =>
    [...new Set(storageGet<string[]>(BOOKMARKS_KEY, []))],
  );

  useEffect(() => {
    storageSet(BOOKMARKS_KEY, saved);
  }, [saved]);

  const isSaved = useCallback(
    (courseId: string) => saved.includes(courseId),
    [saved],
  );

  const toggle = useCallback(
    (courseId: string): boolean => {
      const nowSaved = !saved.includes(courseId);
      setSaved((prev) =>
        nowSaved
          ? prev.includes(courseId)
            ? prev
            : [...prev, courseId]
          : prev.filter((id) => id !== courseId),
      );
      return nowSaved;
    },
    [saved],
  );

  const save = useCallback((courseId: string) => {
    setSaved((prev) =>
      prev.includes(courseId) ? prev : [...prev, courseId],
    );
  }, []);

  const remove = useCallback((courseId: string) => {
    setSaved((prev) => prev.filter((id) => id !== courseId));
  }, []);

  const getAll = useCallback(() => saved, [saved]);

  const value = useMemo<BookmarkContextValue>(
    () => ({ isSaved, toggle, save, remove, getAll, saved }),
    [isSaved, toggle, save, remove, getAll, saved],
  );

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks(): BookmarkContextValue {
  const ctx = useContext(BookmarkContext);
  if (!ctx)
    throw new Error(
      "useBookmarks must be used inside <BookmarkProvider>",
    );
  return ctx;
}

/** Clear bookmarks only (keeps progress). */
export function resetBookmarks(): void {
  storageRemove(BOOKMARKS_KEY);
  window.location.reload();
}
