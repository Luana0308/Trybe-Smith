import connection from './connection';
import { IProduct } from '../interfaces/products';

const getAllProducts = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [products] = await connection.execute(query);
  return products as IProduct[];
};

// const get = async <T>(query:string): Promise<T[]> => {
// //   const query = 'SELECT * FROM Trybesmith.Products;';
//   const [items] = await connection.execute(query);
//   return items as T[];
// };

export default {
  getAllProducts,
};