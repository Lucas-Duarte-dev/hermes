import { Entity } from "@domain/Entity";
import { BillingAddressProps } from "../dtos/IBillingAddress";

export class BillingAddress extends Entity<BillingAddressProps> {
    private constructor(props: BillingAddressProps, id?: string) {
        super(props, id);
    }

    get customerId(): string {
        return this.props.customer_id;
    }

    get country(): string {
        return this.props.country;
    }

    get state(): string {
        return this.props.state;
    }

    get city(): string {
        return this.props.city;
    }

    get neighborhood(): string {
        return this.props.neighborhood;
    }

    get street(): string {
        return this.props.street;
    }

    get number(): string|null {
        return this.props.number
    }

    get zipcode(): string {
        return this.props.zipcode;
    }

    public static create(props: BillingAddressProps, id?: string): BillingAddress {
        return new BillingAddress(props);
    }
}