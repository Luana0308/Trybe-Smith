import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeception';

const validateUserName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) {
    throw new HttpException(400, '"username" is required');
  }
  if (typeof username !== 'string') {
    throw new HttpException(422, '"username" must be a string');
  }
  if (username.length <= 2) {
    throw new HttpException(422, '"username" length must be at least 3 characters long');
  }
  next();
};

export default validateUserName;