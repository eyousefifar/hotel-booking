// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { book_hotel } from "../usecases";
import { FastifyRequest } from "fastify";
export function build_post_book_hotel() {
  return async function post_book_hotel(http_request: FastifyRequest) {
    const {
      id,
      first_name,
      last_name,
      email,
      phone,
      rooms,
      arrival,
      departure,
    } = http_request.body;
    const response = await book_hotel(
      id,
      first_name,
      last_name,
      email,
      phone,
      rooms,
      arrival,
      departure
    );
    return response;
  };
}
