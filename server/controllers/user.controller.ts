import { UserInterface } from "nooo";
import express from "express";
import jwt from "jsonwebtoken";
import config from "config";
import { CustomRequest } from "../interfaces";
import { UserModel } from "../models";
import { Core } from "../libs/core.lib";

const LOG_GROUP = "CONTROLLER/USER";
class UserController {
  async index(req: CustomRequest, res: express.Response) {
    try {
      if (req?.user && req.user?._id) {
        res.json(req.user);
      } else {
        res.status(401).json({});
      }
    } catch (e: any) {
      Core.debug({
        type: "ERROR",
        message: e?.message,
        group: `${LOG_GROUP}/INDEX`,
      });
      res.status(500).json({ message: "Server error" });
    }
  }

  create(req: express.Request, res: express.Response) {
    try {
      res.json({});
    } catch (e: any) {
      Core.debug({
        type: "ERROR",
        message: e?.message,
        group: `${LOG_GROUP}/CREATE`,
      });
      res.status(500).json({ message: "Server error" });
    }
  }

  async login(req: express.Request, res: express.Response) {
    try {
      const user: UserInterface | null = await UserModel.findOne({
        email: req.body.email,
      });
      const jwt_secret = config.get<string>("server.jwt_secret") || "";

      if (user) {
        if (user?.password === req.body.password) {
          const token = jwt.sign({ id: user._id }, jwt_secret);

          res.json({ token });
        }
      }
    } catch (e: any) {
      Core.debug({
        type: "ERROR",
        message: e?.message,
        group: `${LOG_GROUP}/LOGIN`,
      });
      res.status(500).json({ message: "Server error" });
    }
  }

  update(req: express.Request, res: express.Response) {
    res.json({});
  }

  forgot(req: express.Request, res: express.Response) {
    res.json({});
  }
}

export const userController = new UserController();
