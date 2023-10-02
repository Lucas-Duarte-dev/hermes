import instrument from '@aspecto/opentelemetry';
import app from "./app";
import cors from "cors";

instrument({aspectoAuth: process.env.ASPECTO_AUTH});
cors();

app.listen(
  {
    host: "0.0.0.0",
    port: Number(process.env.PORT) ?? 3000,
  },
  (err: Error) => {
    app.log.error(err);
  }
);
