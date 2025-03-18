const express = require("express");
const { getBooksByGenre } = require("../controllers/genre.controller");
const router = express.Router();

router.get("/:genreId/books", getBooksByGenre);

module.exports = router;
