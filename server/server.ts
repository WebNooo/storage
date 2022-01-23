import mongoose from "mongoose";
import express from "express";
import http from "http";
import cors from "cors";
import fileUpload from "express-fileupload";
import config from "config";
import { Core } from "./libs/core.lib";
import Socket from "./libs/socket.lib";
import appRouter from "./routes";

const PORT = 8083;

const main = async () => {
  const conf: any = config.get("server");

  const app = express();
  const server = http.createServer(app);
  const socket = new Socket(server);

  app.use(cors());
  app.use(express.json());
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: `${process.cwd()}/files/tmp/`,
    })
  );
  app.use(socket.middleware);
  app.use("/api", appRouter);

  //connect mongo
  try {
    await mongoose.connect(
      `mongodb://${conf.mongo.username}:${conf.mongo.password}@${conf.mongo.uri}/${conf.mongo.database}?authSource=${conf.mongo.authSource}`
    );
    Core.debug({ message: "Success connected", group: "MONGO" });
  } catch (error: any) {
    Core.debug({ message: error.message, group: "MONGO" });
  }

  server.listen(PORT, () => {
    Core.debug({ message: `Server running on port: ${PORT}`, group: "API" });
  });
};

main();
