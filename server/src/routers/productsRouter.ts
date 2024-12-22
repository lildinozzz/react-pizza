import { Request, Response, Router } from 'express';
import { Op } from 'sequelize';
import { TProduct } from 'types';
import { buildFilterCondition } from 'utils';

const { Product, Category, Ingredient } = require('../../db/models');

const productsRouter: Router = Router();

productsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const products: TProduct[] = await Product.findAll();

    res.status(200).json(products);
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error);
    res.status(500).json({ message: 'Ошибка при получении продуктов', error });
  }
});

productsRouter.get('/filter', async (req: Request, res: Response) => {
  const { filterCondition, ingredientFilters } = buildFilterCondition(req.query);

  try {
    const products = await Product.findAll({
      where: filterCondition,
      include: [
        {
          model: Ingredient,
          through: { attributes: [] },
          required: true,
          as: 'productIngredients',
          where: ingredientFilters,
        },
      ],
    });

    if (products.length === 0) {
      res.status(404).json({ message: 'Продукты по фильтрам не найдены' });
      return;
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Ошибка при получении продуктов с фильтром:', error);
    res.status(500).json({ message: 'Ошибка при получении продуктов с фильтром', error });
  }
});

productsRouter.get('/search', async (req: Request, res: Response) => {
  const { query } = req.query;

  try {
    const products = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.json(products);
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error);
    res.status(500).json({ message: 'Ошибка при получении продуктов', error });
  }
});

productsRouter.get('/category/:categoryId', async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  try {
    const products: TProduct[] = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'categories',
          where: { id: categoryId },
          attributes: [],
        },
      ],
    });

    if (!products.length) {
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
