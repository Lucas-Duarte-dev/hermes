import { Customer } from "@modules/customer/dtos/Customer";
import { Validator } from "@domain/Validator";
import { z } from "zod";

export class RequestCreateCustomerValidator implements Validator<Customer> {
  validator(data: Customer): boolean {
    const customerValidateFields = z.object({
      customer_commerce_id: z.number(),
      name: z.string().min(3),
      email: z.string().email(),
      cpf: z.string().regex(new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g)),
      phone: z.string().regex(/^\d{2}\s\d{5}\-\d{4}$/g)
    });

    if (!customerValidateFields.safeParse(data).success) {
      console.log(JSON.stringify(customerValidateFields.parse(data)));
      return false;
    }

    return true;
  }
}
