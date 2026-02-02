const Book = require("../models/book.js");

const getBooks = (req, res) => {
  Book.find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((e) => res.status(500).send(e.message));
};

const getBook = (req, res) => {
  const { book_id } = req.params;
  Book.findById(book_id)
    .then((book) => {
      if (!book) return res.status(404).send("Book not found");
      res.status(200).send(book);
    })
    .catch((e) => res.status(500).send(e.message));
};

const createBook = (req, res) => {
  Book.create({ ...req.body })
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => res.status(500).send(e.message));
};

const updateBook = (req, res) => {
  const { book_id } = req.params;
  Book.findByIdAndUpdate(book_id, { ...req.body }, { new: true })
    .then((book) => {
      if (!book) return res.status(404).send("Book not found");
      res.status(200).send(book);
    })
    .catch((e) => res.status(500).send(e.message));
};

const deleteBook = (req, res) => {
  const { book_id } = req.params;
  Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) return res.status(404).send("Book not found");
      res.status(200).send("Success");
    })
    .catch((e) => res.status(500).send(e.message));
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
