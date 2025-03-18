const express = require("express");
const { getBooksByAuthor } = require("../controllers/author.controller");
const router = express.Router();

router.get("/:authorId/books", getBooksByAuthor);

module.exports = router;
