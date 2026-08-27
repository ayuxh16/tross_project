import { getLinkedInContext } from "./auth.service.js";

export async function fetchVoyagerProfile(publicId: string) {
  const context = await getLinkedInContext();
  const page = await context.newPage();

  let aboveActivity = "";
  let activity = "";

  page.on("response", async (response) => {
    const url = response.url();

    try {
      if (
        url.includes("/flagship-web/rsc-action/actions/component") &&
        url.includes("profileCardsAboveActivity")
      ) {
        aboveActivity = await response.text();
      }

      if (
        url.includes("/flagship-web/rsc-action/actions/component") &&
        url.includes("profileCardsActivity")
      ) {
        activity = await response.text();
      }
    } catch {}
  });

  await page.goto(`https://www.linkedin.com/in/${publicId}/`, {
    waitUntil: "domcontentloaded",
    timeout: 15000,
  });

  await page.waitForTimeout(5000);
  await page.close();

  return { aboveActivity, activity };
}