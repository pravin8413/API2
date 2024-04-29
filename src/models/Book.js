const mongoose = require("mongoose");

const Book = mongoose.model('Book',{
    bookName : String,
    author : String,
    price : Number
})
const Bookk = mongoose.model('Bookk',{
    bookName : String,
    author : String,
    price : Number
})

module.exports = {Book,Bookk};