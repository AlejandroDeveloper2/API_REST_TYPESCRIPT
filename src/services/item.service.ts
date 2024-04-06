import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertItem = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getAllItems = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getItemDetail = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const editItem = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const removeItem = async (id: string) => {
  const responseItem = await ItemModel.findByIdAndDelete({ _id: id });
  return responseItem;
};

export { insertItem, getAllItems, getItemDetail, editItem, removeItem };
