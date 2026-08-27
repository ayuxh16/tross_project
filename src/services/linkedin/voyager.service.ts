import { linkedinGet } from "./http.service.js";
import { extractPublicId } from "../../utils/extractPublicId.js";
import { parseProfile } from "../../utils/parseProfile.js";

export async function scrapeProfile(profileUrl: string) {
  const publicId = extractPublicId(profileUrl);

  const url =
    "https://www.linkedin.com/voyager/api/identity/dash/profiles" +
    `?q=memberIdentity&memberIdentity=${encodeURIComponent(publicId)}` +
    "&decorationId=com.linkedin.voyager.dash.deco.identity.profile.TopCardCore-39";

  const raw = await linkedinGet(url);

  return parseProfile(raw as any);
}