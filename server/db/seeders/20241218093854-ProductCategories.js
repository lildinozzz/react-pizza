// seeds/[timestamp]-product-categories.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productCategories = [
      { productId: 1, categoryId: 2 },
      { productId: 2, categoryId: 3 },
      { productId: 3, categoryId: 2 },
      { productId: 4, categoryId: 4 },
      { productId: 5, categoryId: 5 },
      { productId: 6, categoryId: 2 },
      { productId: 7, categoryId: 4 },
      { productId: 8, categoryId: 2 },
      { productId: 8, categoryId: 3 },
    ];

    await queryInterface.bulkInsert('ProductCategories', productCategories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductCategories', null, {});
  },
};
