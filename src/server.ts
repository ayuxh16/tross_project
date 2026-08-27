import Fastify from "fastify";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import dotenv from "dotenv";
import profileRoute from "./routes/profile.route.js";

dotenv.config();

const app = Fastify({ logger: true });

await app.register(swagger, {
  openapi: {
    info: {
      title: "LinkedIn Profile API",
      version: "1.0.0"
    }
  }
});

await app.register(swaggerUI, {
  routePrefix: "/docs"
});

await app.register(profileRoute);

app.get("/", async () => ({
  name: "LinkedIn Profile API",
  version: "1.0.0",
  docs: "/docs",
  health: "/health"
}));

app.get("/health", async () => ({
  status: "ok"
}));

const PORT = Number(process.env.PORT || 3000);

app.listen({ port: PORT, host: "0.0.0.0" });