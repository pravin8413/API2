const express = require('express');
const {
    getBook,
    createBook,
    updateBook,
    deleteBook
} = require("../controllers/Books.js")

const router = express.Router()

router.get('/books',getBook)

router.post('/books',createBook)

router.patch('/books/:id',updateBook)

router.delete('/books/:id',deleteBook)

module.exports = router;