'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ingredients = [
      { name: 'Chicken', value: 'chicken', price: '2' },
      { name: 'Mozzarella', value: 'mozzarella', price: '2' },
      { name: 'Cheddar cheese', value: 'cheddar_cheese', price: '2' },
      { name: 'Parmesan', value: 'parmesan', price: '2' },
      { name: 'Cheese sauce', value: 'cheese_sauce', price: '1' },
      { name: 'Tomatoes', value: 'tomatoes', price: '2' },
      { name: 'Alfredo sauce', value: 'alfredo_sauce', price: '1' },
      { name: 'Garlic', value: 'garlic', price: '1' },
      { name: 'Spicy chorizo', value: 'spicy_chorizo', price: '2' },
      { name: 'Jalapeños', value: 'jalapenos', price: '1' },
      { name: 'Barbecue sauce', value: 'barbecue_sauce', price: '1' },
      { name: 'Meatballs', value: 'meatballs', price: '2' },
      { name: 'Sweet pepper', value: 'sweet_pepper', price: '2' },
      { name: 'Red onion', value: 'red_onion', price: '1' },
      { name: 'Bolognese meat sauce', value: 'bolognese_meat_sauce', price: '2' },
      { name: 'Burger sauce', value: 'burger_sauce', price: '1' },
      { name: 'Pickles', value: 'pickles', price: '1' },
      { name: 'Mushrooms', value: 'mushrooms', price: '2' },
      { name: 'Olives', value: 'olives', price: '2' },
      { name: 'Ham', value: 'ham', price: '2' },
      { name: 'Pineapple', value: 'pineapple', price: '2' },
      { name: 'Pepperoni', value: 'pepperoni', price: '2' },
      { name: 'Marinara sauce', value: 'marinara_sauce', price: '1' },
      { name: 'Grilled chicken', value: 'grilled_chicken', price: '2' },
      { name: 'Sweet corn', value: 'sweet_corn', price: '1' },
      { name: 'Cilantro', value: 'cilantro', price: '1' },
      { name: 'Tomato sauce', value: 'tomato_sauce', price: '1' },
      { name: 'Basil', value: 'basil', price: '2' },
      { name: 'Olive oil', value: 'olive_oil', price: '2' },
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
