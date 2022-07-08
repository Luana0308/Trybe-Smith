import { Router } from 'express';
import ordersControllers from '../controllers/orders.controllers';

const router = Router();

router.get('/', ordersControllers.getAllOrders);

export default router;