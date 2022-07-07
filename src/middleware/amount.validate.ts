import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeception';

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) {
    throw new HttpException(400, '"amount" is required');
  }
  if (typeof amount !== 'string') {
    throw new HttpException(422, '"amount" must be a string');
  }
  if (amount.length <= 2) {
    throw new HttpException(422, '"amount" length must be at least 3 characters long');
  }
  next();
};

export default validateAmount;