// import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/users';
import usersModels from '../models/users.models';
import token from '../shared/token';

const createUser = async (user: IUser): Promise<string> => {
  await usersModels.createUser(user);
  const tokenCreate = token.generateJWTToken(user);
  return tokenCreate; 
};

export default {
  createUser,
};