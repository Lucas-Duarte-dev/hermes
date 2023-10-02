import { BillingAddress } from "../domain/BillingAddress";
import { IBillingAddress } from "../dtos/IBillingAddress";

export class BillingAddressMapper {
    public static toPersist(billingAddress: BillingAddress): IBillingAddress {
        return {
            id: billingAddress.id,
            city: billingAddress.city,
            country: billingAddress.country,
            customer_id: billingAddress.customerId,
            neighborhood: billingAddress.neighborhood,
            state: billingAddress.state,
            street: billingAddress.street,
            zipcode: billingAddress.zipcode,
            number: billingAddress?.number
        };
    }
}