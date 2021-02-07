import { get_retrieve_hotel } from "../controllers";
    import { FastifyRequest, FastifyReply } from "fastify";
    export async function retrieve_hotel(request: FastifyRequest, reply: FastifyReply){
        try {
            const response = await get_retrieve_hotel(request);
            reply.code(response.code);
            reply.send(response.response);
        } catch(error) {
            reply.code(500);
            reply.send(error);
        }
    }