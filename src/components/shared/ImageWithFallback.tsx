import { useState } from "react";

/**
 * Image wrapper with graceful fallback.
 * All imagery in the demo build is local SVG;
 * the fallback keeps cards intact if a file is missing.
 */
export function ImageWithFallback({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center border border-border bg-secondary/60 ${className}`}
      >
        <span className="font-serif text-2xl text-muted-foreground/70">M</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
