import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage.interface";

const StorageSchema = new Schema<Storage>(
  {
    fileName: {
      type: "string",
    },

    path: {
      type: "string",
    },
    userId: {
      type: "string",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const StorageModel = model("storage", StorageSchema);
export default StorageModel;
