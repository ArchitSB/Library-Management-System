const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Author = require("./author.model");

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Book.belongsTo(Author, { foreignKey: { name: "authorId", allowNull: false } });

module.exports = Book;
