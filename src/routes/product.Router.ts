import { Router } from 'express';

import productsControllers from '../controllers/products.controllers';
import validateAmount from '../middleware/amount.validate';
import validateName from '../middleware/name.validation';

const router = Router();

router.get('/', productsControllers.getAllProducts);
router.post('/', validateName, validateAmount, productsControllers.createProduct);

export default router;