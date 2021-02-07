import { post_book_hotel } from "../controllers";
import { FastifyRequest, FastifyReply } from "fastify";
export async function book_hotel(request: FastifyRequest, reply: FastifyReply) {
  try {
    const response = await post_book_hotel(request);
    reply.code(response.code);
    reply.send(response.response);
  } catch (error) {
    reply.code(500);
    reply.send(error);
  }
}
