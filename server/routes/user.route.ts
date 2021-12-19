import { Router } from "express";
import {UserController} from "../controllers";

const userRouter = Router()

userRouter.get('/', UserController.index)
userRouter.post('/login', UserController.login)
userRouter.post('/create', UserController.create)
userRouter.post('/forgot', UserController.forgot)
userRouter.patch('/update', UserController.update)

export default userRouter