import { Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { getAllItems } from "../services/item.service";
import { RequestExt } from "../interfaces/request.interface";

const getItems = async (req: RequestExt, res: Response) => {
  try {
    const response = await getAllItems();
    res.send({ data: response, user: req.user });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export { getItems };
