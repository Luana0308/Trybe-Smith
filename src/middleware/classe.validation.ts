import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exeception';

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) {
    throw new HttpException(400, '"classe" is required');
  }
  if (typeof classe !== 'string') {
    throw new HttpException(422, '"classe" must be a string');
  }
  if (classe.length <= 2) {
    throw new HttpException(422, '"classe" length must be at least 3 characters long');
  }
  next();
};

export default validateClasse;