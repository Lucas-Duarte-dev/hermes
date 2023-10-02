import { Controller } from "@domain/infra/Controller";
import { BillingAddressRepositoryInMemory } from "@modules/customer/repositories/inMemory/BillingAddressRepositoryInMemory";
import { CustomerRepositoryInMemory } from "@modules/customer/repositories/inMemory/CustomerRepositoryInMemory";
import { GetCustomerByCommerceId } from "@modules/customer/useCases/GetCustomer/GetCustomerByCommerceId";
import { GetCustomerByCommerceIdController } from "@modules/customer/useCases/GetCustomer/GetCustomerByCommerceIdController";

export function makeGetCustomerByCommerceIdController(): Controller {
    const customerRepository = CustomerRepositoryInMemory.getInstance();
    const billingAddressRepository = BillingAddressRepositoryInMemory.getInstance();

    const getCustomer = new GetCustomerByCommerceId(
        customerRepository,
        billingAddressRepository
    );

    return new GetCustomerByCommerceIdController(getCustomer);
}