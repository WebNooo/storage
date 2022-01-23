import { RoleInterface } from "nooo";
import { model, Schema } from "mongoose";

const RoleSchema = new Schema<RoleInterface>({
  title: { type: String, required: true },
  permissions: { type: [String], default: [] },
});

export const RoleModel = model<RoleInterface>("role", RoleSchema);
