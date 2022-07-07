import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/users';

const createUser = async (user: IUser): Promise<ResultSetHeader> => {
  const { username, classe, level, password } = user;
  const query = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?,?,?,?)';
  const [result] = await connection.execute<ResultSetHeader>(
    query, 
    [username, classe, level, password],
  );
  return result;
};

export default {
  createUser,
};
