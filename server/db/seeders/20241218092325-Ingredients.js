'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ingredients = [
      { name: 'Cheese Sauce', value: 'cheese_sauce' },
      { name: 'Garlic', value: 'garlic' },
      { name: 'Pickles', value: 'pickles' },
      { name: 'Tomatoes', value: 'tomatoes' },
      { name: 'Red Onion', value: 'red_onion' },
      { name: 'Mozzarella', value: 'mozzarella' },
    ];

    await queryInterface.bulkInsert(
      'Ingredients',
      ingredients.map((ingredient) => ({
        name: ingredient.name,
        value: ingredient.value,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  down: async (queryInterface, Sequelize) => {
    // Revert changes by deleting all ingredients
    await queryInterface.bulkDelete('Ingredients', null, {});
  },
};
