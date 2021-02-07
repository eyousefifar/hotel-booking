import { retrieve_hotel } from "../usecases";
import { FastifyRequest } from "fastify"
export function build_get_retrieve_hotel() {
  // TODO: inject any tool that's needed, like request cache
  return async function get_retrieve_hotel(http_request: FastifyRequest) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore     
    const slug: string = http_request.params.slug;
    const response = await retrieve_hotel(slug);
    if(response === "not-found") {
      return {
        code: 404,
        response
      }
    }
    return {
      code: 200,
      response
    };
  };
}
