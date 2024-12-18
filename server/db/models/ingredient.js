const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      this.belongsToMany(models.Product, {
        through: 'productIngredients',
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
