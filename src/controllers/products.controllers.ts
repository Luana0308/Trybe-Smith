import { Request, Response } from 'express';
import productsServices from '../services/products.services';

const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
  const result = await productsServices.getAllProducts();
  return res.status(200).json(result);
};

export default {
  getAllProducts,
};    