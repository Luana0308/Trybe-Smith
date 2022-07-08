import { IOrder } from '../interfaces/orders';
import ordersModels from '../models/orders.models';

const getAllOrders = async ():Promise<IOrder[]> => {
  const orders = await ordersModels.getAllOrders();

  const result = orders.map((order) => ({
    id: order.id,
    userId: order.userId,
    productsIds: [order.productsIds],
  }));

  return result;
};

export default {
  getAllOrders,
};