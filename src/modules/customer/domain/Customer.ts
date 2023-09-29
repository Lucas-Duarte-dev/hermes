import { Entity } from "@domain/Entity";
import { Customer as CustomerDTO } from "../dtos/Customer"

type CustomerProps = Omit<CustomerDTO, "id">;

export class Customer extends Entity<CustomerProps> {
    private constructor(props: CustomerProps, id?: string) {
        super(props, id);
    }

    get customerCommerceId(): number {
        return this.props.customer_commerce_id;
    }

    get name(): string {
        return this.props.name;
    }

    get email(): string {
        return this.props.email;
    }

    get cpf(): string {
        return this.props.cpf;
    }

    get phone(): string {
        return this.props.phone;
    }

    static create(props: CustomerProps, id?: string): Customer {
        return new Customer(props, id);
    } 
}