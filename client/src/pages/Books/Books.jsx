import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);
  return(
    <div>
        <h1>YOURS BOOKS</h1>
        <div>
        {books.map(book=>(
            <div className="book" key={book.id}>
                {book.cover && <img src="" alt="" />}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
            </div>
        ))}
    </div>
    <button>
        <Link to="/add">Add new book</Link>
    </button>
    </div>
  );
};
