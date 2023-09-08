export type Callback<T = any, J = any> = (data: T) => J;
export type Consumer = { consumerTag: string };

export interface MessagerInterface {
  publish(queue: string, message: string): Promise<boolean>;

  consume(queue: string, callback: Callback<Object, void>): Promise<Consumer>;
}
