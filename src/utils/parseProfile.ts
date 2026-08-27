export interface LinkedInProfile {
  name: string | null;
  headline: string | null;
  location: string | null;
  about: string | null;
}

export function parseProfile(rsc: string): LinkedInProfile {
  const clean = rsc.replace(/\\"/g, '"');

  const texts = [...clean.matchAll(/"text":"([^"]+)"/g)]
    .map(m => m[1])
    .filter(t =>
      t.length > 2 &&
      !t.includes("followers") &&
      !t.includes("connection") &&
      t !== "Add photo"
    );

  return {
    name: texts[0] ?? null,
    headline: texts[1] ?? null,
    location: texts[2] ?? null,
    about: texts.find(t => t.length > 80) ?? null,
  };
}