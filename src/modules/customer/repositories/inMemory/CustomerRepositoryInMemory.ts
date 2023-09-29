import { Customer } from "@modules/customer/domain/Customer";
import { ICustomerRepository } from "../ICustomerRepository";
import { Customer as CustomerDTO } from "../../dtos/Customer";
import { CustomerMapper } from "@modules/customer/mapper/CustomerMapper";

export class CustomerRepositoryInMemory implements ICustomerRepository {
    private static instance: CustomerRepositoryInMemory;
    private customers: CustomerDTO[] = [];

    constructor() {
        this.customers = [];
    }

    public static getInstance(): CustomerRepositoryInMemory {
        if (!this.instance) {
            this.instance = new CustomerRepositoryInMemory();
        }

        return this.instance;
    }

    async save(customer: Omit<CustomerDTO, "id">): Promise<void> {
        const customerEntity = Customer.create(customer);

        const persistCustomer = CustomerMapper.toPersist(customerEntity);

        this.customers.push(persistCustomer);
    }

    async getByCommerceId(commerce_id: number): Promise<CustomerDTO> {
        return this.customers.find((customer) => customer.customer_commerce_id === commerce_id);
    }

    async getById(id: string): Promise<CustomerDTO> {
        return this.customers.find((customer) => customer.id === id);
    }
    
}