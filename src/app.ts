import express from 'express';
import productsRoutes from './routes/product.Router';
import usersRouters from './routes/users.Router';
import ordersRouters from './routes/orders.Router';
import httpErrorMiddleware from './middleware/http.erro.middleware';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRouters);
app.use('/orders', ordersRouters);
app.use(httpErrorMiddleware);

export default app;
