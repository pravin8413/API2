
const {Book,Bookk} = require("../models/Book.js");

const getBook = async (req, res) => {
    try {
        const book = req.query;
        const books = await Book.find(book);
        res.status(200).json({
            status: "SUCCESS",
            data: books
        });

    } catch (error) {
        res.status(500).json({
            status: "FAILED",
            message: "Something went wrong"
        })
    }

}

const createBook =  async (req,res)=>{

    try{

        const {bookName,author,price} = req.body;
        await Book.create({bookName,author,price});
        res.status(200).json({
            status: "SUCCESS",
            data: "User created successfully"
        })

    } catch(error) {
        res.status(500).json({
            status: "FAILED",
            message: "Something went wrong"
        })
    }
    
}

const updateBook =  async (req,res)=>{
    try{
        const bookId = req.params.id;
        const {bookName} = req.body;
        const book = await Book.findByIdAndUpdate(bookId,{bookName});
        res.status(200).json({
            status: "SUCCESS",
            data: book
        })
    } catch(error) {
        res.status(500).json({
            status: "FAILED",
            message: "Something went wrong"
        })
    }
}

const deleteBook =  async (req,res)=>{
    try{
        const bookId = req.params.id;

        await Book.findByIdAndDelete(bookId);
        res.status(200).json({
            status : "SUCCESS",
            message : "User deleted successfully"
        })

    } catch(error) {
        res.status(500).json({
            status: "FAILED",
            message : "Something went wrong"
        })
    }
}

module.exports = {
    getBook,
    createBook,
    updateBook,
    deleteBook
}