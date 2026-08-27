export function extractPublicId(url: string): string {
  const clean = url.trim();

  const regex =
    /^https?:\/\/(?:www\.)?linkedin\.com\/in\/([^/?#]+)\/?/i;

  const match = clean.match(regex);

  if (!match) {
    throw new Error("Invalid LinkedIn URL");
  }

  return decodeURIComponent(match[1]);
}