const sequelize = require("../config/database");
const Author = require("./author.model");
const Book = require("./book.model");
const Genre = require("./genre.model");

// Many-to-Many Relationship: Book & Genre
Book.belongsToMany(Genre, { through: "BookGenres" });
Genre.belongsToMany(Book, { through: "BookGenres" });

module.exports = { sequelize, Author, Book, Genre };
