export type IBillingAddress = {
    id: string
    customer_id?: string
    country: string
    state: string
    city: string
    neighborhood: string
    street: string
    number?: string
    zipcode: string
};

export type BillingAddressProps = Omit<IBillingAddress, "id">;