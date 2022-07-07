import { Router } from 'express';

import productsControllers from '../controllers/products.controllers';

const router = Router();

router.get('/', productsControllers.getAllProducts);

export default router;