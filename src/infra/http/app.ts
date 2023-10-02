import init from "./trace/instrumentation";
init('hermes_api', 'development');

import fastify from "fastify";
import routes from "./routes";
import { config } from "dotenv";


config();

const app = fastify({});

app.register(routes);

export default app;
