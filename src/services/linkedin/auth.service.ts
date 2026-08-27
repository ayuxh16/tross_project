import dotenv from "dotenv";

dotenv.config();

export const cookies = {
  liAt: process.env.LI_AT!,
  jsession: process.env.JSESSIONID!
};

if (!cookies.liAt || !cookies.jsession) {
  throw new Error("Missing LI_AT or JSESSIONID in .env");
}