const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    id: {
      // Use the special Sequelize DataTypes object to provide the type of data.
      type: DataTypes.INTEGER,
      // Equivalent to SQL's `NOT NULL` option.
      allowNull: false,
      // show this is the Primary Key
      primaryKey: true,
      // Turn on auto increment.
      autoIncrement: true,
    },
    category_name: {
      // Use the special Sequelize DataTypes object to provide the type of data.
      type: DataTypes.STRING,
      // Equivalent to SQL's `NOT NULL` option.
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
