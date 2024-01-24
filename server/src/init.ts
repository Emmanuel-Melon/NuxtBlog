import routers from "./routers";
import express from "express";
import cors from "cors";
// import compression from "compression";
// import * as helmet from "helmet";
// import { catchErrors } from "./middleware/errors";

export function init(app: any) {
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.set("trust proxy", "loopback");
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(routers);
  // app.use(catchErrors);
}