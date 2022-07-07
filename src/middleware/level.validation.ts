import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeception';

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (!level) {
    throw new HttpException(400, '"level" is required');
  }
  if (typeof level !== 'number') {
    throw new HttpException(422, '"level" must be a number"');
  }
  if (level <= 0) {
    throw new HttpException(422, '"level" must be greater than or equal to 1');
  }
  next();
};

export default validateLevel;