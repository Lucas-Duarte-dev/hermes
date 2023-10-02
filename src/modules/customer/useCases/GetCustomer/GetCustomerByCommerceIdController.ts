import { Controller } from "@domain/infra/Controller";
import { HttpResponse, clientError, ok } from "@domain/infra/HttpResponse";
import { GetCustomerByCommerceId } from "./GetCustomerByCommerceId";

type RequestData = {
    params: {
        customer_commerce_id: number
    }
}

export class GetCustomerByCommerceIdController implements Controller<RequestData> {
   constructor(
    private readonly getCustomerByCommerceId: GetCustomerByCommerceId
   ) {}

    async handle({ params }: RequestData): Promise<HttpResponse> {
        try {
            const customer = await this.getCustomerByCommerceId.execute(Number(params.customer_commerce_id));

            return ok(customer);
        } catch (error) {
            return clientError(error);
        }
    }
}