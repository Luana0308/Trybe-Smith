import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const result = await ordersServices.getAllOrders();
  return res.status(200).json(result);
};

export default {
  getAllOrders,
};