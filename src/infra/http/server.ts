import app from "./app";
import cors from "cors";

cors();

app.listen(
  {
    port: Number(process.env.PORT) ?? 3000,
  },
  (err: Error) => {
    app.log.error(err);
  }
);
