import { Customer as CustomerDTO } from "../dtos/Customer";

export interface ICustomerRepository {
    save(customer: Omit<CustomerDTO, "id">): Promise<void>;
    getByCommerceId(commerce_id: number): Promise<CustomerDTO>
    getById(id: string): Promise<CustomerDTO>
}