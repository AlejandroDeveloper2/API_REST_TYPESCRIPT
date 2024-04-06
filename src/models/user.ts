import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: "string",
      required: true,
    },

    password: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    description: {
      type: "string",
      default: "Soy la description",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("users", UserSchema);
export default UserModel;
