import { ValidatorResult } from "@domain/ValidatorResult";
import { CustomerProps } from "../dtos/ICustomer";
import { Validator } from "@domain/Validator";
import { z } from "zod";

export class BillingAddressValidator implements Validator<CustomerProps> {
    validator(data: CustomerProps): ValidatorResult {
        const errors = [];

        const billingAddressShape = z.object({
             country: z.string().min(3),
             state: z.string().min(2).max(2),
             city: z.string().min(3),
             neighborhood: z.string().min(3),
             street: z.string().min(3),
             number: z.string().nullable(),
             zipcode: z.string().regex(new RegExp(/^\d{5}\-\d{3}$/g))
        });

        if (!billingAddressShape.safeParse(data.billing_address).success) {
            errors.push('Customer billing address is invalid.');
        }

        return new ValidatorResult(errors);
    }

}