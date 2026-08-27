export function parseProfile(raw: any) {
  const profile = raw?.elements?.[0];

  if (!profile) {
    throw new Error("Profile not found");
  }

  return {
    name: profile.firstName + " " + profile.lastName,
    headline: profile.headline ?? null,
    location: profile.locationName ?? null,
    about: profile.summary ?? null
  };
}