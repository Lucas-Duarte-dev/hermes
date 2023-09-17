import { Controller } from "@domain/infra/Controller";
import { CreateCustomerController } from "@modules/customer/useCases/CreateCustomer/CreateCustomerController";

export function makeCreateCustomerController(): Controller {
  const createCustomerController = new CreateCustomerController();

  return createCustomerController;
}
