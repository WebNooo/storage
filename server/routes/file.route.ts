import { Router } from "express";
import {FileController} from "../controllers";

const fileRouter = Router()

fileRouter.get('/', FileController.index)
fileRouter.get('/download', FileController.download)
fileRouter.post('/upload', FileController.upload)

export default fileRouter