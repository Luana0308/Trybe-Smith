import productModel from '../models/products.models';
import { IProduct } from '../interfaces/products';

const getAllProducts = async ():Promise<IProduct[]> => {
  const products = await productModel.getAllProducts();
  return products;
};

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const newProdut = await productModel.createProducts(product);
  return newProdut;
};

export default {
  getAllProducts,
  createProduct,
};