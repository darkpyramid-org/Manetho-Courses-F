import { Link } from "react-router-dom";

/** The Manetho wordmark. */
export function Logo({
  to = "/",
  className = "",
}: {
  to?: string;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Manetho — home"
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold-700/40 bg-gold-500/15 font-serif text-lg font-semibold text-gold-700 dark:border-gold-300/30 dark:bg-gold-300/10 dark:text-gold-300"
      >
        M
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-wide text-foreground">
          Manetho
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Learn Ancient Egypt
        </span>
      </span>
    </Link>
  );
}
