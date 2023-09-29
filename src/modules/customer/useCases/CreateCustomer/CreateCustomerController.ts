import { Controller } from "@domain/infra/Controller";
import { HttpResponse, clientError, created } from "@domain/infra/HttpResponse";
import { Customer } from "@modules/customer/dtos/Customer";
import { Validator } from "@domain/Validator";
import { ICustomerRepository } from "@modules/customer/repositories/ICustomerRepository";

type RequestData = {
  body: Customer;
};

export class CreateCustomerController implements Controller<RequestData> {
  constructor(
    private readonly validatorRequestBody: Validator,
    private readonly customerRepository: ICustomerRepository
  ) {}

  async handle({ body }: RequestData): Promise<HttpResponse> {
    if (!this.validatorRequestBody.validator(body)) {
      return clientError(
        new Error("Request body is invalid, please try again.")
      );
    }

    const {customer_commerce_id, name, email, phone, cpf} = body;

    await this.customerRepository.save({customer_commerce_id, name, email, phone, cpf});

    return created();
  }
}
