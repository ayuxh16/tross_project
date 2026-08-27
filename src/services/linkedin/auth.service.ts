import { chromium, BrowserContext } from "playwright";
import dotenv from "dotenv";

dotenv.config();

let context: BrowserContext | null = null;

export async function getLinkedInContext(): Promise<BrowserContext> {
  if (context) return context;

  const browser = await chromium.launch({
    headless: true,
  });

  context = await browser.newContext();

  await context.addCookies([
    {
      name: "li_at",
      value: process.env.LI_AT!,
      domain: ".linkedin.com",
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
    },
    {
      name: "JSESSIONID",
      value: process.env.JSESSIONID!,
      domain: ".linkedin.com",
      path: "/",
      httpOnly: false,
      secure: true,
      sameSite: "Lax",
    },
  ]);

  return context;
}