import { FastifyReply, FastifyRequest } from "fastify";
import { Controller } from "../Controller";

export const adapter = (controller: Controller) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const requestData = {
      body: request.body,
      params: request.params,
      query: request.query,
    };

    const { statusCode, body } = await controller.handle(requestData);

    if (statusCode < 200 && statusCode > 299) {
      return reply.status(statusCode).send(body);
    }

    return reply.status(statusCode).send(body);
  };
};
