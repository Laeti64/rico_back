import Express from "express";
import cors from "cors";
import api from "./api";

const app = Express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(Express.json());

app.use("/api/v1", api);

export default app;
