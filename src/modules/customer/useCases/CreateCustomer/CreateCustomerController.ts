import { Controller } from "@domain/infra/Controller";
import { HttpResponse, clientError, ok } from "@domain/infra/HttpResponse";
import { randomUUID } from "crypto";
import { Customer } from "@modules/customer/dtos/Customer";
import { z } from "zod";
import { Validator } from "@domain/Validator";

type RequestData = {
  body: Customer;
};

export class CreateCustomerController implements Controller<RequestData> {
  constructor(private readonly validatorRequestBody: Validator) {}

  async handle({ body }: RequestData): Promise<HttpResponse> {
    if (!this.validatorRequestBody.validator(body)) {
      return clientError(
        new Error("Request body is invalid, please try again.")
      );
    }

    const customer = {
      id: randomUUID(),
      ...body,
    };

    return ok(customer);
  }
}
