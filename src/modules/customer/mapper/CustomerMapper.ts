import { Customer } from "../domain/Customer"
import { ICustomer as PersistCustomer } from "../dtos/ICustomer"

export class CustomerMapper {
    public static toPersist(customer: Customer): Omit<PersistCustomer, "billing_address"> {
        return {
            id: customer.id,
            customer_commerce_id: customer.customerCommerceId,
            name: customer.name,
            email: customer.email,
            cpf: customer.cpf,
            phone: customer.phone
        };
    }
}