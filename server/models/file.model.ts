import { Schema, model } from "mongoose";
import { FileInterface } from "nooo";

const FileSchema = new Schema<FileInterface>({
  filename: { type: String },
  type: { type: String },
  size: { type: Number },
  path: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  parent: { type: Schema.Types.ObjectId, ref: "file" },
});

export const FileModel = model<FileInterface>("file", FileSchema);
