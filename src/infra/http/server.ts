import { config } from "dotenv";
import app from "./app";

config();

app.listen(
  {
    port: 3000 || Number(process.env.PORT),
  },
  (err: Error) => {
    app.log.error(err);
  }
);
