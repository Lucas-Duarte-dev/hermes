import { Controller } from "@domain/infra/Controller";
import { CreateCustomerController } from "@modules/customer/useCases/CreateCustomer/CreateCustomerController";
import { RequestCreateCustomerValidator } from "../../../../modules/customer/useCases/CreateCustomer/RequestCreateCustomerValidator";
import { CustomerRepositoryInMemory } from "@modules/customer/repositories/inMemory/CustomerRepositoryInMemory";

export function makeCreateCustomerController(): Controller {
  const customerValidate = new RequestCreateCustomerValidator();
  const customerRepositoryInMemory = new CustomerRepositoryInMemory(); 

  const createCustomerController = new CreateCustomerController(
    customerValidate,
    customerRepositoryInMemory
  );

  return createCustomerController;
}
