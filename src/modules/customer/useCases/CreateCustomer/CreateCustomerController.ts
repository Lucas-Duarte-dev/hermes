import { Controller } from "@domain/infra/Controller";
import { HttpResponse, clientError, created, fail } from "@domain/infra/HttpResponse";
import { ICustomer } from "@modules/customer/dtos/ICustomer";
import { Validator } from "@domain/Validator";
import { ICustomerRepository } from "@modules/customer/repositories/ICustomerRepository";
import { CreateCustomer } from "./CreateCustomer";
import {trace, context} from '@opentelemetry/api';

type RequestData = {
  body: ICustomer;
};

export class CreateCustomerController implements Controller<RequestData> {
  constructor(
    private readonly createCustomer: CreateCustomer
  ) {}

  async handle({ body }: RequestData): Promise<HttpResponse> {
    try {
      const activeSpan = trace.getSpan(context.active())

      await this.createCustomer.execute(body);

      activeSpan?.addEvent('create customer controller called...', {getDate: Date.now()});

      return created();
    } catch (error) {
      return clientError(error);
    }
  }
}
