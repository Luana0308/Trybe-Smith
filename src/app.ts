import express from 'express';
import productsRoutes from './routes/product.Router';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);

export default app;
