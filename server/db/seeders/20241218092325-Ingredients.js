'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ingredients = [
      'Сырный соус',
      'Чеснок',
      'Солённые огурчики',
      'Томаты',
      'Красный лук',
      'Моцарелла',
    ];

    // Добавляем ингредиенты в базу данных
    await queryInterface.bulkInsert(
      'Ingredients',
      ingredients.map((name) => ({
        name,
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
