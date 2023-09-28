import fastify from "fastify";
import routes from "./routes";
import { config } from "dotenv";

config();

const app = fastify({
  logger: true,
});

app.register(routes);

export default app;
