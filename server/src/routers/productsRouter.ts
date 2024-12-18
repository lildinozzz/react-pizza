import { Request, Response, Router } from 'express';

const { Product } = require('../../db/models');

const productsRouter: Router = Router();

productsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();

    res.status(200).json(products);
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error);
    res.status(500).json({ message: 'Ошибка при получении продуктов', error });
  }
});

export { productsRouter };
