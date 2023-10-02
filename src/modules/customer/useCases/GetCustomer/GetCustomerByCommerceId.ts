import { ICustomer } from "@modules/customer/dtos/ICustomer";
import { IBillingAddressRepository } from "@modules/customer/repositories/IBillingAddressRepository";
import { ICustomerRepository } from "@modules/customer/repositories/ICustomerRepository";

export class GetCustomerByCommerceId {
    constructor(
        private readonly customerRepository: ICustomerRepository,
        private readonly billingAddressRepository: IBillingAddressRepository
    ) {}

    async execute(commerce_id: number): Promise<ICustomer> {
        const customer = await this.customerRepository.getByCommerceId(commerce_id);
        console.log(commerce_id)
        if (!customer) {
            throw new Error('Can not find customer by commmerce id.');
        }

        const billingAddress = await this.billingAddressRepository.getByCustomerId(customer.id);

        if (!billingAddress) {
            return customer;
        }

        return Object.assign(customer, {
            billing_address: billingAddress
        });  
    }
}