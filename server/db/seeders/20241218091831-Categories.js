'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoryNames = ['Все', 'Мясные', 'Острые', 'Сладкие', 'Вегетарианские', 'С курицей'];

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
