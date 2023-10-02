import { BillingAddress } from "@modules/customer/domain/BillingAddress";
import { BillingAddressProps, IBillingAddress } from "@modules/customer/dtos/IBillingAddress";
import { IBillingAddressRepository } from "../IBillingAddressRepository";
import { BillingAddressMapper } from "@modules/customer/mapper/BillingAddressMapper";

export class BillingAddressRepositoryInMemory implements IBillingAddressRepository {
    private billingAddresses: IBillingAddress[] = [];
    private static instance: BillingAddressRepositoryInMemory;

    constructor() {
        this.billingAddresses = [];
    }

    public static getInstance(): BillingAddressRepositoryInMemory {
        if (!this.instance) {
            this.instance = new BillingAddressRepositoryInMemory();
        }

        return this.instance;
    }

    async save(billingAddress: BillingAddressProps): Promise<void> {
        const billingAddresEntity = BillingAddress.create(billingAddress);

        const persitBillingAddress = BillingAddressMapper.toPersist(billingAddresEntity);

        this.billingAddresses.push(persitBillingAddress);

        return;
    }

    async getByCustomerId(customerId: string): Promise<IBillingAddress> {
        return this.billingAddresses.find((address) => address.customer_id === customerId);
    }
    
    async getById(id: string): Promise<IBillingAddress> {
        return this.billingAddresses.find((address) => address.id === id);
    }
}