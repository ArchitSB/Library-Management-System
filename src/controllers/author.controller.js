const { Book } = require("../models");

const getBooksByAuthor = async (req, res) => {
  const books = await Book.findAll({ where: { authorId: req.params.authorId } });
  res.json(books);
};

module.exports = { getBooksByAuthor };
