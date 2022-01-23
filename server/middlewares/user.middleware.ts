import express, { Request } from "express";
import jwt from "jsonwebtoken";
import config from "config";
import { Core } from "../libs/core.lib";
import { UserModel } from "../models";
import { CustomRequest } from "../interfaces";

export const UserMiddleware =
  (permission: any) =>
  async (
    req: CustomRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { authorization = "" } = req.headers;

      const jwt_secret = config.get<string>("server.jwt_secret") || "";

      if (authorization) {
        const { id = "" }: any = jwt.verify(authorization, jwt_secret);

        if (id) {
          req.user = await UserModel.findById(id, { email: 1 }).populate(
            "role",
            { title: 1, permissions: 1 }
          );
          return next();
        }
      }
      res.status(401).json({ message: "Access denied" });
    } catch (e: any) {
      Core.debug({ type: "INFO", message: e.message, group: "API" });
      res.status(401).json({ message: "Access denied" });
    }
  };
