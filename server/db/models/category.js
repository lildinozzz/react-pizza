const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.belongsToMany(models.Product, {
        through: models.ProductCategory,
        foreignKey: 'categoryId',
        otherKey: 'productId',
        as: 'products',
      });
    }
  }

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'Categories',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  );

  return Category;
};
