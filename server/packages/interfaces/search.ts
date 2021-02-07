import { get_search } from "../controllers";
import { FastifyRequest, FastifyReply } from "fastify";
export async function search(request: FastifyRequest, reply: FastifyReply) {
  try {
    const response = await get_search(request);
    reply.code(response.code);
    reply.send(response.response);
  } catch (error) {
    reply.code(500);
    reply.send(error);
  }
}
