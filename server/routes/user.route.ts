import { Router } from "express";
import { UserController } from "../controllers";
import { UserMiddleware } from "../middlewares";

const userRouter = Router();

userRouter.get("/", UserMiddleware("user"), UserController.index);
userRouter.post("/login", UserController.login);
userRouter.post("/create", UserController.create);
userRouter.post("/forgot", UserController.forgot);
userRouter.patch("/update", UserMiddleware("user"), UserController.update);

export default userRouter;
