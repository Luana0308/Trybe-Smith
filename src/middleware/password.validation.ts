import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeception';

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    throw new HttpException(400, '"password" is required');
  }
  if (typeof password !== 'string') {
    throw new HttpException(422, '"password" must be a string');
  }
  if (password.length < 8) {
    throw new HttpException(422, '"password" length must be at least 8 characters long');
  }
  next();
};

export default validatePassword;