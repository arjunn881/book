import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });
  const navigate = useNavigate();

  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  console.log(location.pathname.split("/")[2]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/books/" + bookId, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <h1>UPDATE A BOOK</h1>
      <input
        type="text"
        onChange={handleChange}
        name="title"
        placeholder="Title"
      />
      <input
        type="text"
        onChange={handleChange}
        name="desc"
        placeholder="Description"
      />
      <input
        type="number"
        onChange={handleChange}
        name="price"
        placeholder="Price"
      />
      <input
        type="text"
        onChange={handleChange}
        name="cover"
        placeholder="Cover"
      />
      <button className="formBtn" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};
