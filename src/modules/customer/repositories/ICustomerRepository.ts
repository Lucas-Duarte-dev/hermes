import { Customer } from "../domain/Customer";
import { Customer as CustomerDTO } from "../dtos/Customer";

export interface ICustomerRepository {
    save(customer: CustomerDTO): Promise<void>;
    getByCommerceId(commerce_id: number): Promise<Customer>
    getById(id: string): Promise<Customer>
}