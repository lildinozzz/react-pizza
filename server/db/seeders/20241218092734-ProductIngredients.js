'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productIngredients = [
      // Cheesy Chicken
      { productId: 1, ingredientId: 1 }, // Mozzarella
      { productId: 1, ingredientId: 2 }, // Cheddar cheese
      { productId: 1, ingredientId: 3 }, // Parmesan
      { productId: 1, ingredientId: 4 }, // Cheese sauce
      { productId: 1, ingredientId: 5 }, // Tomatoes
      { productId: 1, ingredientId: 6 }, // Alfredo sauce
      { productId: 1, ingredientId: 7 }, // Garlic
      { productId: 1, ingredientId: 8 }, // Spicy chorizo

      // Diablo
      { productId: 2, ingredientId: 9 }, // Jalapeños
      { productId: 2, ingredientId: 10 }, // Barbecue sauce
      { productId: 2, ingredientId: 11 }, // Sweet pepper
      { productId: 2, ingredientId: 12 }, // Red onion
      { productId: 2, ingredientId: 13 }, // Pickles
      { productId: 2, ingredientId: 14 }, // Pineapple
      { productId: 2, ingredientId: 2 }, // Cheddar cheese

      // Cheeseburger
      { productId: 3, ingredientId: 5 }, // Tomatoes (Used as a replacement for Bolognese meat sauce)
      { productId: 3, ingredientId: 6 }, // Alfredo sauce (Used as a replacement for Burger sauce)
      { productId: 3, ingredientId: 2 }, // Cheddar cheese

      // Margherita
      { productId: 4, ingredientId: 2 }, // Cheddar cheese
      { productId: 4, ingredientId: 6 }, // Alfredo sauce

      // Vegetarian
      { productId: 5, ingredientId: 13 }, // Pickles
      { productId: 5, ingredientId: 6 }, // Alfredo sauce
      { productId: 5, ingredientId: 14 }, // Pineapple
      { productId: 5, ingredientId: 2 }, // Cheddar cheese

      // Pepperoni
      { productId: 6, ingredientId: 1 }, // Mozzarella
      { productId: 6, ingredientId: 2 }, // Cheddar cheese
      { productId: 6, ingredientId: 6 }, // Alfredo sauce

      // Hawaiian
      { productId: 7, ingredientId: 2 }, // Cheddar cheese
      { productId: 7, ingredientId: 11 }, // Sweet pepper
      { productId: 7, ingredientId: 6 }, // Alfredo sauce

      // BBQ Chicken
      { productId: 8, ingredientId: 2 }, // Cheddar cheese
      { productId: 8, ingredientId: 11 }, // Sweet pepper
      { productId: 8, ingredientId: 14 }, // Pineapple
    ];

    await queryInterface.bulkInsert('ProductIngredients', productIngredients, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductIngredients', null, {});
  },
};
