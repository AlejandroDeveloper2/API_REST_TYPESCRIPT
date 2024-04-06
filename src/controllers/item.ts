import { Request, Response } from "express";

import { handleHttp } from "../utils/error.handle";
import {
  editItem,
  getAllItems,
  getItemDetail,
  insertItem,
  removeItem,
} from "../services/item.service";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getItemDetail(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getAllItems();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await editItem(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertItem(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_SAVE_ITEM", e);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseItem = await removeItem(id);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
