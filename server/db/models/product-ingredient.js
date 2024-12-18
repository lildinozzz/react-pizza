const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductIngredient extends Model {
    static associate(models) {
      this.belongsTo(models.Product, { foreignKey: 'productId' });
      this.belongsTo(models.Ingredient, { foreignKey: 'ingredientId' });
    }
  }

  ProductIngredient.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      ingredientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Ingredients',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'ProductIngredient',
      tableName: 'ProductIngredients',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  );

  return ProductIngredient;
};
