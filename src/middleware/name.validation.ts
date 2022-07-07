import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeception';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    throw new HttpException(400, '"name" is required');
  }
  if (typeof name !== 'string') {
    throw new HttpException(422, '"name" must be a string');
  }
  if (name.length <= 2) {
    throw new HttpException(422, '"name" length must be at least 3 characters long');
  }
  next();
};

export default validateName;