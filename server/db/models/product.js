const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsToMany(models.Category, {
        through: models.ProductCategory,
        foreignKey: 'productId',
        otherKey: 'categoryId',
        as: 'categories',
      });
    }
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('constructor', 'new'),
        allowNull: false,
      },
      prices: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      dough: {
        type: DataTypes.ENUM('traditional', 'thin'),
        allowNull: false,
      },
      isConstructor: {
        type: DataTypes.BOOLEAN,
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
