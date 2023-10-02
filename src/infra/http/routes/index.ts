import { adapter } from "@domain/infra/adapters/FastifyRouteAdapter";
import { FastifyInstance } from "fastify";
import { makeCreateCustomerController } from "../factories/controllers/CreateCustomerControllerFactory";
import { makeGetCustomerByCommerceIdController } from "../factories/controllers/GetCustomerByCommerceIdControllerFactory";

async function routes(fastify: FastifyInstance, options: Object) {
  fastify.post("/customer", adapter(makeCreateCustomerController()));

  fastify.get("/customer/:customer_commerce_id", adapter(makeGetCustomerByCommerceIdController()));
}

export default routes;
