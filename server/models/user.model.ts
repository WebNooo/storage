import { Schema, model } from "mongoose";
import { UserInterface } from "nooo";

const UserSchema = new Schema<UserInterface>({
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: "role" },
});

export const UserModel = model<UserInterface>("user", UserSchema);
