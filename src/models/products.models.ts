import connection from './connection';
import { IProduct } from '../interfaces/products';

const getAllProducts = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [products] = await connection.execute(query);
  return products as IProduct[];
};

export default {
  getAllProducts,
};