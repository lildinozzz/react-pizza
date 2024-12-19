'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productIngredients = [
      { productId: 1, ingredientId: 1 },
      { productId: 1, ingredientId: 2 },
      { productId: 2, ingredientId: 3 },
      { productId: 2, ingredientId: 4 },
      { productId: 3, ingredientId: 5 },
      { productId: 3, ingredientId: 6 },
      { productId: 4, ingredientId: 6 },
      { productId: 5, ingredientId: 6 },
      { productId: 6, ingredientId: 1 },
      { productId: 7, ingredientId: 2 },
      { productId: 8, ingredientId: 3 },
      { productId: 8, ingredientId: 5 },
    ];

    await queryInterface.bulkInsert('ProductIngredients', productIngredients, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductIngredients', null, {});
  },
};
