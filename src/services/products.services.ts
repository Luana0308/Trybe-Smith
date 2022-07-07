import productModel from '../models/products.models';
import { IProduct } from '../interfaces/products';

const getAllProducts = async ():Promise<IProduct[]> => {
  const products = await productModel.getAllProducts();
  return products;
};

export default {
  getAllProducts,
};