import { Entity } from "@domain/Entity";
import { Customer as CustomerDTO } from "../dtos/Customer"

export class Customer extends Entity<CustomerDTO> {
    private constructor(props: CustomerDTO, id?: string) {
        super(props, id);
    }

    get customerCommerceId(): number {
        return this.props.customer_commerce_id;
    }

    get name(): string {
        return this.props.name;
    }

    get email(): string {
        return this.props.email
    }

    static create(props: CustomerDTO, id?: string): Customer {
        return new Customer(props, id);
    } 
}