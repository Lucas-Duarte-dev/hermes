import { Customer } from "@modules/customer/dtos/Customer";
import { Validator } from "@domain/Validator";
import { z } from "zod";

export class RequestCreateCustomerValidator implements Validator<Customer> {
  validator(data: Customer): boolean {
    const customerValidateFields = z.object({
      customer_ref: z.string().min(3),
      name: z.string().min(3),
      birth_date: z
        .date({ coerce: true })
        .min(new Date("1930/01/01"), { message: "Too old" })
        .max(new Date(), { message: "Too young!" }),
      email: z.string().email(),
      phone: z.string(),
    });

    if (!customerValidateFields.safeParse(data).success) {
      console.log(JSON.stringify(customerValidateFields.parse(data)));
      return false;
    }

    return true;
  }
}
