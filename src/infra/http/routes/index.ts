import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { v4 as uuidv4 } from "uuid";

async function routes(fastify: FastifyInstance, options: Object) {
  fastify.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      return reply.status(200).send({ hello: "world", susep_code: uuidv4() });
    }
  );
}

export default routes;
