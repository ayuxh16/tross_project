import { FastifyRequest, FastifyReply } from "fastify";
import { scrapeProfile } from "../services/linkedin/voyager.service.js";

type Body = {
  url: string;
};

export async function profileController(
  req: FastifyRequest<{ Body: Body }>,
  reply: FastifyReply
) {
  try {
    const { url } = req.body;

    const data = await scrapeProfile(url);

    return reply.send({
      success: true,
      data,
    });
  } catch (err) {
    return reply.code(500).send({
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    });
  }
}