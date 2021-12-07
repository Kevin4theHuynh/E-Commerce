
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}


Product.init(
  {
    // define columns
    id: {
      // defining the type for the model
      type: DataTypes.INTEGER,
      // Checks whether or not allows null
      allowNull: false,
      // Allows for unique identifer
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // Checks if the value is true
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Sets value at 10
      defaultValue: 10,
      validate: {
        isDecimal: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // refers to catergory model id
      references: {
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
