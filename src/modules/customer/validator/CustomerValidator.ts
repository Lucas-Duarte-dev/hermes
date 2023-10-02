import { CustomerProps } from "@modules/customer/dtos/ICustomer";
import { Validator } from "@domain/Validator";
import { z } from "zod";
import { ValidatorResult } from "@domain/ValidatorResult";

export class CustomerValidator implements Validator<CustomerProps> {
  validator(data: CustomerProps): ValidatorResult {
    const errors = [];
    
    const customerValidateFields = z.object({
      customer_commerce_id: z.number(),
      name: z.string().min(3),
      email: z.string().email(),
      cpf: z.string().regex(new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g)),
      phone: z.string().regex(/^\d{2}\s\d{5}\-\d{4}$/g)
    });

    if (!customerValidateFields.safeParse(data).success) {
      errors.push('Customer data is invalid.');
    }

    return new ValidatorResult(errors);
  }
}