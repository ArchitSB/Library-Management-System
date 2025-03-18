const { Genre,Book, Author } = require("../models");

const getBooksByGenre = async (req, res) => {
  const genre = await Genre.findByPk(req.params.genreId, { include: "Books" });
  res.json(genre ? genre.Books : []);
};

const getAuthorsByGenre = async(req,res) => {
const books = await Book.findOne({where: {genreId: req.params.genreId}});
const authorId = books.authorId;
const authors = await Author.findOne({where: {id: authorId}});
res.json(authors);
};

module.exports = { getBooksByGenre, getAuthorsByGenre };
