import { Request, Response, Router } from 'express';

const { Product, Category } = require('../../db/models');

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

productsRouter.get('/:categoryId', async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'categories',
          where: { id: categoryId },
          attributes: [],
        },
      ],
    });

    if (products.length === 0) {
      res.status(404).json({ message: `Продукты для категории с ID ${categoryId} не найдены` });
      return;
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Ошибка при получении продуктов по категории:', error);
    res.status(500).json({ message: 'Ошибка при получении продуктов по категории', error });
  }
});

export { productsRouter };
