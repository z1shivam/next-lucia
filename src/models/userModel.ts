import { Model, Schema, model, models } from "mongoose";

export interface IUser {
  _id: string
  username: string;
  password_hash: string;
}

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password_hash: {
      type: String,
    }
  } as const,
  { _id: false },
);

const User = models?.User as Model<IUser> || model("User", userSchema);

export default User;
