import { BillingAddress } from "../domain/BillingAddress";
import { BillingAddressProps, IBillingAddress } from "../dtos/IBillingAddress";

export interface IBillingAddressRepository {
    save(billingAddress: BillingAddressProps): Promise<void>;
    getByCustomerId(customerId: string): Promise<IBillingAddress>;
    getById(id: string): Promise<IBillingAddress>;
}