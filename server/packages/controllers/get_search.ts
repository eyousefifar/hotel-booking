/* eslint-disable @typescript-eslint/ban-ts-comment */

import { search } from "../usecases";
import { FastifyRequest } from "fastify";
export function build_get_search() {
  // TODO: inject any tool that's needed, like request cache
  return async function get_search(http_request: FastifyRequest) {
    // @ts-ignore
    const {
        // @ts-ignore
      city,
      // @ts-ignore
      start_date,
      // @ts-ignore
      end_date,
      // @ts-ignore
      max_price,
      // @ts-ignore
      min_size,
      // @ts-ignore
      max_size,
      // @ts-ignore
    } = http_request.query;
    const response = await search(
      city,
      start_date,
      end_date,
      max_price,
      min_size,
      max_size
    );
    return response;
  };
}
