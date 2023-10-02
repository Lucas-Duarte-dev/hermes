import { BillingAddressProps, IBillingAddress } from "./IBillingAddress";

export type ICustomer = {
  id: string
  customer_commerce_id: number
  email: string
  name: string
  phone: string
  cpf: string
  billing_address?: BillingAddressProps
};

export type CustomerProps = Omit<ICustomer, "id">;