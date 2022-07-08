import { Router } from 'express';

import usersControllers from '../controllers/users.controllers';
import validateUserName from '../middleware/username.Validation';
import validateClasse from '../middleware/classe.validation';
import validateLevel from '../middleware/level.validation';
import validatePassword from '../middleware/password.validation';

const router = Router();

router.post(
  '/', 
  validateUserName,
  validateClasse, 
  validateLevel, 
  validatePassword, 
  usersControllers.createUser,
);

export default router;