import { get_retrieve_cities } from "../controllers";
import { FastifyRequest, FastifyReply } from "fastify"

export async function retrieve_cities(request: FastifyRequest, reply: FastifyReply){
        try {
            const response = await get_retrieve_cities();
            reply.code(200);
            reply.send(response)
        } catch(error) {
            reply.code(500);
            reply.send(error)
        }
    }