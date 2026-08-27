import { FastifyInstance } from "fastify";
import { profileController } from "../controllers/profile.controller.js";
import { profileBody } from "../schemas/profile.schema.js";

export default async function profileRoute(app: FastifyInstance) {
  app.post(
    "/api/v1/profile",
    {
      schema: {
        body: profileBody,
      },
    },
    profileController
  );
}