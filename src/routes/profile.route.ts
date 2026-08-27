import { FastifyPluginAsync } from "fastify";
import { getProfile } from "../controllers/profile.controller.js";

const routes: FastifyPluginAsync = async (app) => {
  app.post(
    "/profile",
    {
      schema: {
        tags: ["Profile"],
        summary: "Scrape a LinkedIn profile",

        body: {
          type: "object",
          required: ["url"],
          properties: {
            url: {
              type: "string",
              format: "uri",
            },
          },
        },

        response: {
          200: {
            type: "object",
            properties: {
              success: { type: "boolean" },
              data: {
                type: "object",
                additionalProperties: true, // IMPORTANT
              },
            },
          },
        },
      },
    },
    getProfile
  );
};

export default routes;