import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

async function routes(fastify: FastifyInstance, options: Object) {
  fastify.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { hello: "world" };
    }
  );
}

export default routes;
