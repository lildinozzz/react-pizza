const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      this.belongsToMany(models.Product, {
        through: models.ProductIngredient,
        foreignKey: 'ingredientId',
        otherKey: 'productId',
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
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Ingredient',
      tableName: 'Ingredients',
    },
  );

  return Ingredient;
};
