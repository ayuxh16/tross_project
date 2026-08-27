import { FastifyReply, FastifyRequest } from "fastify";
import { extractPublicId } from "../utils/extractPublicId.js";
import { fetchVoyagerProfile } from "../services/linkedin/voyager.service.js";
import { parseProfile } from "../utils/parseProfile.js";

export async function getProfile(
  request: FastifyRequest<{ Body: { url: string } }>,
  reply: FastifyReply
) {
  try {
    const publicId = extractPublicId(request.body.url);
    const raw = await fetchVoyagerProfile(publicId);

    const profile = parseProfile(raw.aboveActivity);

    return reply.send({
      success: true,
      data: raw.aboveActivity,
    });
  } catch (err) {
    return reply.code(500).send({
      success: false,
      message: err instanceof Error ? err.message : "Unknown error",
    });
  }
}