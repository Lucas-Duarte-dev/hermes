import { Channel, ConsumeMessage, Replies } from "amqplib";
import {
  Callback,
  Consumer,
  MessagerInterface,
} from "@domain/MessagerInterface";

type Consume = Replies.Consume;

class RabbitmqServer implements MessagerInterface {
  constructor(private readonly channel: Channel) {}

  async publish(queue: string, message: string): Promise<boolean> {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async consume(
    queue: string,
    callback: Callback<ConsumeMessage, void>
  ): Promise<Consumer> {
    return this.channel.consume(queue, (message) => {
      callback(message), this.channel.ack(message);
    });
  }
}
