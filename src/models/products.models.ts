import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/products';

const getAllProducts = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [products] = await connection.execute(query);
  return products as IProduct[];
};

const createProducts = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?,?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;

  const newProdut: IProduct = { id, name, amount };
  return newProdut;
};

// const get = async <T>(query:string): Promise<T[]> => {
// //   const query = 'SELECT * FROM Trybesmith.Products;';
//   const [items] = await connection.execute(query);
//   return items as T[];
// };

export default {
  getAllProducts,
  createProducts,
};