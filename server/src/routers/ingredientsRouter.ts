import { Request, Response, Router } from 'express';
const { Ingredient, Categories } = require('../../db/models');

const ingredientsRouter: Router = Router();

ingredientsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const ingredients = await Ingredient.findAll();

    res.status(200).json(ingredients);
  } catch (error) {
    console.error('Ошибка при получении ингридиентов:', error);
    res.status(500).json({ message: 'Ошибка при получении ингридиентов', error });
  }
});

export { ingredientsRouter };
