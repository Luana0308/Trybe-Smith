import { Request, Response } from 'express';
import productsServices from '../services/products.services';

const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
  const result = await productsServices.getAllProducts();
  return res.status(200).json(result);
};

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const result = await productsServices.createProduct(req.body);
  return res.status(201).json(result);
};
export default {
  getAllProducts,
  createProduct,
};    