import { Channel, Connection, ConsumeMessage, connect } from "amqplib";
import {
  Callback,
  Consumer,
  MessagerInterface,
} from "@domain/infra/MessagerInterface";

class RabbitmqServer implements MessagerInterface {
  private channel: Channel;
  private connection: Connection;

  constructor(private readonly uri: string) {}

  async start(): Promise<RabbitmqServer> {
    this.connection = await connect(this.uri);

    this.channel = await this.connection.createChannel();

    return this;
  }

  async publish(queue: string, message: string): Promise<boolean> {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async consume(
    queue: string,
    callback: Callback<ConsumeMessage, void>
  ): Promise<Consumer> {
    return await this.channel.consume(queue, (message) => {
      callback(message), this.channel.ack(message);
    });
  }

  async end(): Promise<void> {
    await this.connection.close();
  }
}

export { RabbitmqServer };
