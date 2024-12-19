'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ingredients = [
      { name: 'Сырный соус', value: 'cheese_sauce' },
      { name: 'Чеснок', value: 'garlic' },
      { name: 'Солённые огурчики', value: 'pickles' },
      { name: 'Томаты', value: 'tomatoes' },
      { name: 'Красный лук', value: 'red_onion' },
      { name: 'Моцарелла', value: 'mozzarella' },
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
    // Откатываем изменения, удаляя все ингредиенты
    await queryInterface.bulkDelete('Ingredients', null, {});
  },
};
