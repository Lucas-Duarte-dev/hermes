import { Entity } from "@domain/Entity";
import { CustomerProps } from "../dtos/ICustomer"
import { hashSync } from "bcrypt"
import { BillingAddressProps, IBillingAddress } from "../dtos/IBillingAddress";

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
        return hashSync(this.props.cpf, 8);
    }

    get phone(): string {
        return this.props.phone;
    }

    get billingAddress(): BillingAddressProps|null {
        return this.props?.billing_address;
    }

    static create(props: CustomerProps, id?: string): Customer {
        return new Customer(props, id);
    } 
}