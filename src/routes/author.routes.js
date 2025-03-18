const express = require("express");
const { getBooksByAuthor, getAllAuthors, addAuthor } = require("../controllers/author.controller");
const router = express.Router();

router.get("/", getAllAuthors);
router.get("/:authorId/books", getBooksByAuthor);
router.post("/author/new", addAuthor);

module.exports = router;
