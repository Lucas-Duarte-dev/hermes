import { Customer } from "@modules/customer/domain/Customer";
import { ICustomerRepository } from "../ICustomerRepository";
import { ICustomer } from "../../dtos/ICustomer";
import { CustomerMapper } from "@modules/customer/mapper/CustomerMapper";

export class CustomerRepositoryInMemory implements ICustomerRepository {
    private static instance: CustomerRepositoryInMemory;
    private customers: Omit<ICustomer, "billing_address">[] = [];

    constructor() {
        this.customers = [];
    }

    public static getInstance(): CustomerRepositoryInMemory {
        if (!this.instance) {
            this.instance = new CustomerRepositoryInMemory();
        }

        return this.instance;
    }

    async save(customer: Omit<ICustomer, "id">): Promise<Omit<ICustomer, "billing_address">> {
        const customerEntity = Customer.create(customer);

        const persistCustomer = CustomerMapper.toPersist(customerEntity);

        this.customers.push(persistCustomer);

        return persistCustomer;
    }

    async getByCommerceId(commerce_id: number): Promise<ICustomer> {
        return this.customers.find((customer) => customer.customer_commerce_id === commerce_id);
    }

    async getById(id: string): Promise<ICustomer> {
        return this.customers.find((customer) => customer.id === id);
    }
    
}