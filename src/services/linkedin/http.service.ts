import { request } from "undici";
import { cookies } from "./auth.service.js";

export async function linkedinGet(url: string) {
  const { body, statusCode } = await request(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      cookie: `li_at=${cookies.liAt}; JSESSIONID=${cookies.jsession}`,
      "csrf-token": cookies.jsession.replace(/"/g, ""),
      "x-restli-protocol-version": "2.0.0",
      "x-li-lang": "en_US",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/139.0 Safari/537.36"
    }
  });

  const json = await body.json();

  if (statusCode !== 200) {
    console.error(JSON.stringify(json, null, 2));
    throw new Error(`LinkedIn returned ${statusCode}`);
  }

  return json;
}