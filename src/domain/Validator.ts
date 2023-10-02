import { ValidatorResult } from "./ValidatorResult";

export interface Validator<T = any> {
  validator(data: T): ValidatorResult;
}
