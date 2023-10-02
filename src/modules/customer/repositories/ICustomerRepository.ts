import { ICustomer as CustomerDTO } from "../dtos/ICustomer";

export interface ICustomerRepository {
    save(customer: Omit<CustomerDTO, "id">): Promise<Omit<CustomerDTO, "billing_address">>;
    getByCommerceId(commerce_id: number): Promise<CustomerDTO>
    getById(id: string): Promise<CustomerDTO>
}