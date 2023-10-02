import { Controller } from "@domain/infra/Controller";
import { CreateCustomerController } from "@modules/customer/useCases/CreateCustomer/CreateCustomerController";
import { CustomerRepositoryInMemory } from "@modules/customer/repositories/inMemory/CustomerRepositoryInMemory";
import { CustomerValidatorChain } from "@modules/customer/validator/CustomerValidatorChain";
import { BillingAddressValidator } from "@modules/customer/validator/BillingAddressValidator";
import { CustomerValidator } from "@modules/customer/validator/CustomerValidator";
import { CreateCustomer } from "@modules/customer/useCases/CreateCustomer/CreateCustomer";
import { BillingAddressRepositoryInMemory } from "@modules/customer/repositories/inMemory/BillingAddressRepositoryInMemory";

export function makeCreateCustomerController(): Controller {
  const billingAddressValidator = new BillingAddressValidator();
  const customerVailidator = new CustomerValidator();

  const customerValidateChain = new CustomerValidatorChain([billingAddressValidator, customerVailidator]);
  const customerRepositoryInMemory = CustomerRepositoryInMemory.getInstance(); 
  const billingAddressRepositoryInMemory = BillingAddressRepositoryInMemory.getInstance();

  const createCustomer = new CreateCustomer(
    customerRepositoryInMemory,
    billingAddressRepositoryInMemory,
    customerValidateChain
  );

  const createCustomerController = new CreateCustomerController(createCustomer);

  return createCustomerController;
}
