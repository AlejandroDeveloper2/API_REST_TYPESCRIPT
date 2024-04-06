import { Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { registerUpload } from "../services/storage.service";
import { RequestExt } from "../interfaces/request.interface";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      userId: `${user?.id}`,
      path: `${file?.path}`,
    };
    const responseUpload = await registerUpload(dataToRegister);
    res.send(responseUpload);
  } catch (e) {
    handleHttp(res, "ERROR_GET_FILE");
  }
};

export { getFile };
