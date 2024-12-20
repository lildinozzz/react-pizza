'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoryNames = ['All', 'Meat', 'Spicy', 'Sweet', 'Vegetarian', 'With Chicken'];

    const categories = categoryNames.map((name) => ({
      name: name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
