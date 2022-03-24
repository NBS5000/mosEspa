// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class AddToCart extends Model {}

// set up fields and rules for Product model
// define columns
AddToCart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "product",
          key: "id",
        }
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
  },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "addToCart",
  }
);

module.exports = AddToCart;
