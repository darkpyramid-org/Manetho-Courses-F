/**
 * SEO helpers — page titles and meta management.
 *
 * Each page sets its own title and description;
 * the base document metadata lives in index.html.
 */

export function setSeo(title: string, description?: string): void {
  document.title = description
    ? `${title} — Manetho`
    : title.endsWith("Manetho")
      ? title
      : `${title} — Manetho`;

  if (description) {
    setMetaDescription(description);
  }
}

function setMetaDescription(description: string): void {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;
}

export function courseTitle(title: string): string {
  return title;
}
