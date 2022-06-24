// Import the most important parts of the sequelize library.
const { Model, DataTypes } = require("sequelize");
// Import the database connection from config.js.
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class.
class Product extends Model {}

// Set up fields and rules for Product model.
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_name: {
      // Use the special Sequelize DataTypes object to provide the type of data.
      type: DataTypes.STRING,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
    },
    price: {
      // Use the special Sequelize DataTypes object to provide the type of data.
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
    },
    stock: {
      // Use the special Sequelize DataTypes object to provide the type of data.
      type: DataTypes.INTEGER,
      // This is equivalent to SQL's `NOT NULL` option.
      allowNull: false,
    },
    category_id: {
      // Use the special Sequelize DataTypes object to provide the type of data.
      type: DataTypes.INTEGER,
      // This is equivalent to SQL's `NOT NULL` option.
      allowNull: true,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
