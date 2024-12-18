import { Request, Response, Router } from 'express';
import { TCategory } from 'types';
const { Category } = require('../../db/models');

const categoryRouter: Router = Router();

categoryRouter.get('/', async (req: Request, res: Response) => {
  try {
    const categories: TCategory[] = await Category.findAll();

    res.status(200).json(categories);
  } catch (error) {
    console.error('Ошибка при получении категорий:', error);
    res.status(500).json({ message: 'Ошибка при получении категорий', error });
  }
});

export { categoryRouter };
