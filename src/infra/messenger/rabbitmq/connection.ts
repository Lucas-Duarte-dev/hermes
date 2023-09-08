import { Channel, connect } from "amqplib";

async function connection(uri: string): Promise<Channel> {
  const connection = await connect(uri);

  return await connection.createChannel();
}
