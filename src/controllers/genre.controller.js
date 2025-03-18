const { Genre } = require("../models");

const getBooksByGenre = async (req, res) => {
  const genre = await Genre.findByPk(req.params.genreId, { include: "Books" });
  res.json(genre ? genre.Books : []);
};

module.exports = { getBooksByGenre };
