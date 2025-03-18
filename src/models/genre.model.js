const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Genre = sequelize.define("Genre", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Genre;
