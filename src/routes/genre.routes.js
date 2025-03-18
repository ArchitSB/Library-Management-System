const express = require("express");
const { getBooksByGenre, getAuthorsByGenre } = require("../controllers/genre.controller");
const router = express.Router();

router.get("/:genreId/books", getBooksByGenre);
router.get("/:genresId/authors", getAuthorsByGenre);

module.exports = router;
