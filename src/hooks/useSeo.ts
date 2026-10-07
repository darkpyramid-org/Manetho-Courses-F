import { useEffect } from "react";
import { setSeo } from "@/lib/seo";

/** Set the page title and meta description on mount / update. */
export function useSeo(title: string, description?: string): void {
  useEffect(() => {
    setSeo(title, description);
  }, [title, description]);
}
