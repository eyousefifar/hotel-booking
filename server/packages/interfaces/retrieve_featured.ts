import { get_retrieve_featured } from "../controllers";
import { FastifyRequest, FastifyReply } from "fastify"
    export async function retrieve_featured(request: FastifyRequest, reply: FastifyReply){
        try {
            const response = await get_retrieve_featured();
            reply.code(200);
            reply.send(response);
        } catch(error) {
            reply.code(error.code);
            reply.send(error);
        }
    }