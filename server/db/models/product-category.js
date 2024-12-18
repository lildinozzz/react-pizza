const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    static associate(models) {
      this.belongsTo(models.Product, { foreignKey: 'productId' });
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }

  ProductCategory.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'ProductCategory',
      tableName: 'ProductCategories',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  );

  return ProductCategory;
};
