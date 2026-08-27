import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const linkedin = axios.create({
  baseURL: "https://www.linkedin.com",
  headers: {
    Cookie: `li_at=${process.env.LI_AT}; JSESSIONID=${process.env.JSESSIONID}`,
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36",
    Accept: "application/json",
    "csrf-token": process.env.JSESSIONID?.replace(/"/g, "") || "",
    "x-restli-protocol-version": "2.0.0",
  },
});