const express = require("express");
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

const router = express.Router();

router.get("/", getBooks); // /books/
router.get("/:book_id", getBook); // /books/:book_id
router.post("/", createBook); // /books/
router.patch("/:book_id", updateBook); // /books/:book_id
router.delete("/:book_id", deleteBook); // /books/:book_id

module.exports = router;
