import { Validator } from "@domain/Validator";
import { CustomerProps } from "@modules/customer/dtos/ICustomer";
import { IBillingAddressRepository } from "@modules/customer/repositories/IBillingAddressRepository";
import { ICustomerRepository } from "@modules/customer/repositories/ICustomerRepository";

export class CreateCustomer {
    constructor(
        private readonly customerRepository: ICustomerRepository,
        private readonly billingAddressRepository: IBillingAddressRepository,
        private readonly customerValidatorChain: Validator
    ) {}

    async execute(data: CustomerProps): Promise<void> {
        const validationResult = this.customerValidatorChain.validator(data);

        if (!validationResult.isValid) {
            throw new Error(validationResult.errorMessages.toString());
        }

        const customer = await this.customerRepository.save(data);

        const billingAddressWithCustomerId = Object.assign(data.billing_address, {
            customer_id: customer.id
        });

        await this.billingAddressRepository.save(billingAddressWithCustomerId);

        return;
    }
}