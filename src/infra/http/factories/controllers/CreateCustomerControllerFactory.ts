import { Controller } from "@domain/infra/Controller";
import { CreateCustomerController } from "@modules/customer/useCases/CreateCustomer/CreateCustomerController";
import { RequestCreateCustomerValidator } from "../../../../modules/customer/useCases/CreateCustomer/RequestCreateCustomerValidator";

export function makeCreateCustomerController(): Controller {
  const customerValidate = new RequestCreateCustomerValidator();

  const createCustomerController = new CreateCustomerController(
    customerValidate
  );

  return createCustomerController;
}
