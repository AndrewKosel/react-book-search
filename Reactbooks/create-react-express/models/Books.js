const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
   
  },
  author: {
    type: String,
    trim:true
    
  },
  description: {
    type: Text,
    trim:true
    
  },
  image: {
    type: String,
    trim:true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;