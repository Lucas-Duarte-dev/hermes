import { Controller } from "@domain/infra/Controller";
import { HttpResponse, clientError, ok } from "@domain/infra/HttpResponse";
import { randomUUID } from "crypto";
import { Customer } from "@modules/customer/dtos/Customer";
import { z } from "zod";

type RequestData = {
  body: Customer;
};

export class CreateCustomerController implements Controller<RequestData> {
  async handle({ body }: RequestData): Promise<HttpResponse> {
    const customerValidateFields = z.object({
      customer_ref: z.string().min(3),
      name: z.string().min(3),
      birth_date: z
        .date({ coerce: true })
        .min(new Date("1900-01-01"), { message: "Too old" })
        .max(new Date(), { message: "Too young!" }),
      email: z.string().email(),
      phone: z.string(),
    });

    if (!customerValidateFields.safeParse(body).success) {
      return clientError(new Error("Invalid arguments."));
    }

    const customer = {
      id: randomUUID(),
      ...body,
    };

    return ok(customer);
  }
}
