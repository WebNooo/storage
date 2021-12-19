import mongoose from "mongoose";
import express from "express"
import http from "http"
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { Core } from "./libs/core.lib";
import Socket from "./libs/socket.lib";
import appRouter from "./routes";

const PORT = 8083

const main = async () => {
  const app = express()
  const server = http.createServer(app)
  const socket = new Socket(server)

  app.use(cors())
  app.use(express.json())
  app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: `${process.cwd()}/files/tmp/`
  }))
  app.use(socket.middleware)
  app.use('/api', appRouter)
  

  //connect mongo
  try {
    await mongoose.connect(
      `mongodb://20167:272065@mongo/storage?authSource=admin`
    )
    Core.debbug({message: "Success connected", group: "MONGO"})
  } catch (error: any) {
    Core.debbug({message: error.message, group: "MONGO"})
  }

  server.listen(PORT, () => {
    Core.debbug({message: `Server runnig on port: ${PORT}`, group: "API"})
  })

};

main();
