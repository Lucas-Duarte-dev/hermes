import { Customer } from "@modules/customer/domain/Customer";
import { ICustomerRepository } from "../ICustomerRepository";
import { Customer as CustomerDTO } from "../../dtos/Customer";

export class CustomerRepositoryInMemory implements ICustomerRepository {
    private static instance: CustomerRepositoryInMemory;
    private customers: Customer[] = [];

    constructor() {
        this.customers = [];
    }

    public static getInstance(): CustomerRepositoryInMemory {
        if (!this.instance) {
            this.instance = new CustomerRepositoryInMemory();
        }

        return this.instance;
    }

    async save(customer: CustomerDTO): Promise<void> {
        const customerEntity = Customer.create(customer);
        console.log(customerEntity);
        this.customers.push(customerEntity);
    }

    async getByCommerceId(commerce_id: number): Promise<Customer> {
        return this.customers.find((customer) => customer.customerCommerceId === commerce_id);
    }

    async getById(id: string): Promise<Customer> {
        return this.customers.find((customer) => customer.id === id);
    }
    
}