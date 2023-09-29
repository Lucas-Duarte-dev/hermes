import { Customer } from "../domain/Customer"
import { Customer as PersistCustomer } from "../dtos/Customer"

export class CustomerMapper {
    public static toPersist(customer: Customer): PersistCustomer {
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