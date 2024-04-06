import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const getAllOrders = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};
