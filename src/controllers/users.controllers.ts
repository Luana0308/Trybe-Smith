import { Request, Response } from 'express';
import usersServices from '../services/users.services';

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const result = await usersServices.createUser(req.body);
  return res.status(201).json({ token: result });
};

export default {
  createUser,
};