const { Book, Author } = require("../models");

const getBooksByAuthor = async (req, res) => {
  const books = await Book.findAll({ where: { authorId: req.params.authorId } });
  res.json(books);
};

const getAllAuthors = async(req,res) => {
  try{
    const authors = await Author.findAll();
    res.json(authors);
  }catch(error){
    res.status(400).json({error: error.message});
  }
};

const addAuthor = async(req,res) => {
  try{
    const { name, birthdate, email  } = req.body;
    const author = await Author.create({name, birthdate, email});
    
    res.status(201).json(author);
  } catch(error){
    res.status(400).json({error: error.message});
  }
};


module.exports = { getBooksByAuthor, getAllAuthors, addAuthor };
