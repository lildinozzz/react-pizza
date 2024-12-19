import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import {
  authRouter,
  tokensRouter,
  categoryRouter,
  ingredientsRouter,
  productsRouter,
} from './routers';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || '3001', 10);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('images'));
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/ingredients', ingredientsRouter);
app.use('/api/products', productsRouter);

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
