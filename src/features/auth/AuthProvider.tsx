import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { AuthState, AuthUser } from "@/types";

/**
 * Authentication boundary.
 *
 * Manetho currently runs in DEMO MODE: there is no
 * authentication server, and no real account is
 * created. The login/register pages are explicit
 * about this. The context exists so that the UI
 * and every downstream feature (progress, bookmarks,
 * certificates) can be wired to a real backend later
 * without changing components.
 */

interface AuthContextValue extends AuthState {
  /** Sign in — demo only; creates a local session. */
  signIn: (name: string, email: string) => void;
  /** Register — demo only; identical to sign in. */
  register: (name: string, email: string) => void;
  signOut: () => void;
  updateProfile: (name: string) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const DEMO_USER_ID = "local-demo-user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const signIn = useCallback((name: string, email: string) => {
    setUser({ id: DEMO_USER_ID, name: name.trim(), email: email.trim() });
  }, []);

  const register = useCallback((name: string, email: string) => {
    setUser({ id: DEMO_USER_ID, name: name.trim(), email: email.trim() });
  }, []);

  const signOut = useCallback(() => setUser(null), []);

  const updateProfile = useCallback((name: string) => {
    setUser((prev) => (prev ? { ...prev, name: name.trim() } : null));
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      status: user ? "authenticated" : "idle",
      isDemo: true,
      signIn,
      register,
      signOut,
      updateProfile,
    }),
    [user, signIn, register, signOut, updateProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
