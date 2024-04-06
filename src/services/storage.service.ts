import StorageModel from "../models/storage";

import { Storage } from "../interfaces/storage.interface";

const registerUpload = async ({ fileName, userId, path }: Storage) => {
  const responseUpload = await StorageModel.create({ fileName, userId, path });
  return responseUpload;
};

export { registerUpload };
