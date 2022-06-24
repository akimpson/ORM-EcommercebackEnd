const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      // Use the special Sequelize DataTypes object to provide the type of data.
      type: DataTypes.INTEGER,
      // This is equivalent to SQL's `NOT NULL` option.
      allowNull: false,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      // Use the special Sequelize DataTypes object to provide the type of data.
      type: DataTypes.INTEGER,
      // This is equivalent to SQL's `NOT NULL` option.
      allowNull: false,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
