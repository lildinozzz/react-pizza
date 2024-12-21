'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ingredients = [
      { name: 'Cheese Sauce', value: 'cheese-sauce', price: '1' },
      { name: 'Cheese Crust', value: 'cheese-crust', price: '1' },
      { name: 'Creamy Mozzarella', value: 'creamy-mozzarella', price: '1' },
      { name: 'Tomatoes', value: 'tomatoes', price: '2' },
      { name: 'Red Onion', value: 'red-onion', price: '1' },
      { name: 'Cheddar and Parmesan', value: 'cheddar-parmesan', price: '2' },
    ];

    await queryInterface.bulkInsert(
      'Ingredients',
      ingredients.map((ingredient) => ({
        name: ingredient.name,
        value: ingredient.value,
        price: ingredient.price,
        imageUrl: `/images/ingredient/${ingredient.value}.png`,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ingredients', null, {});
  },
};
