import { adapter } from "@domain/infra/adapters/FastifyRouteAdapter";
import { FastifyInstance } from "fastify";
import { makeCreateCustomerController } from "../factories/controllers/CreateCustomerControllerFactory";

async function routes(fastify: FastifyInstance, options: Object) {
  fastify.post("/customer", adapter(makeCreateCustomerController()));
}

export default routes;
