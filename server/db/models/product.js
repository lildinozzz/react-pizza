const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsToMany(models.Category, {
        through: models.ProductCategory,
        foreignKey: 'productId',
        otherKey: 'categoryId',
        as: 'categories',
      });

      this.belongsToMany(models.Ingredient, {
        through: models.ProductIngredient,
        foreignKey: 'productId',
        otherKey: 'ingredientId',
        as: 'productIngredients',
      });
    }
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prices: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      dough: {
        type: DataTypes.ENUM('traditional', 'thin'),
        allowNull: false,
      },
      isConstructor: {
        type: DataTypes.BOOLEAN,
      },
      isNew: {
        type: DataTypes.BOOLEAN,
      },
      productCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'Products',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  );

  return Product;
};
