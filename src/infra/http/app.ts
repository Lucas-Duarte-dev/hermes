import fastify from "fastify";
import routes from "./routes";
import { config } from "dotenv";

config();

const app = fastify({
  logger: false,
});

app.register(routes);

export default app;
