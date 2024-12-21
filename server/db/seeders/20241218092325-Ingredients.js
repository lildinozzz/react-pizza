'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ingredients = [
      { name: 'Cheese Sauce', value: 'cheese_sauce', price: '1' },
      { name: 'Garlic', value: 'garlic', price: '1' },
      { name: 'Pickles', value: 'pickles', price: '1' },
      { name: 'Tomatoes', value: 'tomatoes', price: '2' },
      { name: 'Red Onion', value: 'red_onion', price: '1' },
      { name: 'Mozzarella', value: 'mozzarella', price: '2' },
    ];

    await queryInterface.bulkInsert(
      'Ingredients',
      ingredients.map((ingredient) => ({
        name: ingredient.name,
        value: ingredient.value,
        price: ingredient.price,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ingredients', null, {});
  },
};
