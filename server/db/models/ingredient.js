const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    // Связи для Ingredient
    static associate(models) {
      this.belongsToMany(models.Product, {
        through: 'ProductIngredients',
        foreignKey: 'ingredientId',
        as: 'products',
      });
    }
  }

  Ingredient.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Ingredient',
      tableName: 'Ingredients',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  );

  return Ingredient;
};
