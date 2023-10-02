import { Validator } from "@domain/Validator";
import { CustomerProps } from "../dtos/ICustomer";
import { ValidatorResult } from "@domain/ValidatorResult";

export class CustomerValidatorChain implements Validator<CustomerProps> {
    constructor(private readonly validators: Validator[]) {}
    
    validator(data: CustomerProps): ValidatorResult {
        const errors = [];

        for (let validate of this.validators) {
            let validatorResult = validate.validator(data);

            if (!validatorResult.isValid) {
                errors.push(...validatorResult.errorMessages)
            }
        }

        return new ValidatorResult(errors);
    }
}