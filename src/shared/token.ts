import { sign, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/users';

dotenv.config();

const SECRET = 'senhatoken';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateJWTToken = (user:IUser) => 
  sign(user, SECRET, jwtConfig);

export default {
  generateJWTToken,
};