'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ingredients = [
      { name: 'Mozzarella', value: 'mozzarella', price: '2' },
      { name: 'Cheddar cheese', value: 'cheddar', price: '2' },
      { name: 'Parmesan', value: 'parmesan', price: '2' },
      { name: 'Cheese sauce', value: 'cheese_sauce', price: '1' },
      { name: 'Tomatoes', value: 'tomatoes', price: '2' },
      { name: 'Alfredo sauce', value: 'alfredo_sauce', price: '1' },
      { name: 'Garlic', value: 'garlic', price: '1' },
      { name: 'Spicy chorizo', value: 'spicy_chorizo', price: '2' },
      { name: 'Jalapeños', value: 'jalapenos', price: '1' },
      { name: 'Barbecue sauce', value: 'barbecue_sauce', price: '1' },
      { name: 'Sweet pepper', value: 'sweet_pepper', price: '2' },
      { name: 'Red onion', value: 'red_onion', price: '1' },
      { name: 'Pickles', value: 'pickles', price: '1' },
      { name: 'Pineapple', value: 'pineapple', price: '2' },
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
