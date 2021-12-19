import express from "express";
import fileUpload from "express-fileupload";
import { Core } from "../libs/core.lib";
import { v4 as uuidv4 } from "uuid";
import { FileModel } from "../models";

class FileController {
  index(req: express.Request, res: express.Response) {
    res.json({});
  }

  async upload(req: express.Request, res: express.Response) {
    try {
      const files = req?.files || {};
      const filesDir = `${process.cwd()}/files`;

      const parent = await FileModel.find({ user: "", parent: "" });

      const uploadCallback = (file: fileUpload.UploadedFile) => {
        file.mv(`${filesDir}/${file.name}`, (err: any) => {
            if (err) return console.log(err);

            console.log("success");
        });
      };

      if (Object.keys(files).length > 0) {
        Object.values(files).forEach(
          (file: fileUpload.UploadedFile | fileUpload.UploadedFile[]) =>
            Array.isArray(file)
              ? file.forEach(uploadCallback)
              : uploadCallback(file)
        );
      } else {
      }

      res.status(200).send("1");
    } catch (error: any) {
      Core.debbug({ type: "ERROR", message: error.message, group: "FILE" });
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  download(req: express.Request, res: express.Response) {
    res.json({});
  }
}

export const fileController = new FileController();
