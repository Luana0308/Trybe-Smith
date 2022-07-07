import express from 'express';
import productsRoutes from './routes/product.Router';
import httpErrorMiddleware from './middleware/http.erro.middleware';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use(httpErrorMiddleware);

export default app;
