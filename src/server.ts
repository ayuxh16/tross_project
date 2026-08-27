import Fastify from "fastify";
import dotenv from "dotenv";

import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

import profileRoute from "./routes/profile.route.js";

dotenv.config();

const app = Fastify({
  logger: true,
});

await app.register(swagger, {
  openapi: {
    info: {
      title: "LinkedIn Profile API",
      version: "1.0.0",
      description: "Reverse engineered LinkedIn Voyager API",
    },
  },
});

await app.register(swaggerUI, {
  routePrefix: "/docs",
});

app.get("/", async () => ({
  name: "LinkedIn Profile API",
  version: "1.0.0",
  docs: "/docs",
  health: "/health",
}));

await app.register(profileRoute, {
  prefix: "/api/v1",
});

const PORT = Number(process.env.PORT) || 3000;

app.listen({
  port: PORT,
  host: "0.0.0.0",
});