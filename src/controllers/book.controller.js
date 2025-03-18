const { Book, Genre } = require("../models");

const getAllBooks = async (req, res) => {
  const books = await Book.findAll({ include: Genre });
  res.json(books);
};

const addBook = async (req, res) => {
  try {
    const { title, description, publicationYear, authorId, genreIds } = req.body;
    const book = await Book.create({ title, description, publicationYear, authorId });

    if (genreIds) {
      const genres = await Genre.findAll({ where: { id: genreIds } });
      await book.setGenres(genres);
    }

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllBooks, addBook };
