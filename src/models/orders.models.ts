import connection from './connection';
import { IOrderModel } from '../interfaces/orders';

const getAllOrders = async ():Promise<IOrderModel[]> => {
  const query = `SELECT o.id, o.userId, p.id as productsIds
                FROM Trybesmith.Orders AS o
                INNER JOIN Trybesmith.Products AS p
                ON o.id = p.orderId;`;
  const [result] = await connection.execute(query);
  return result as IOrderModel[];
};

export default {
  getAllOrders,
};