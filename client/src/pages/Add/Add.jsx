import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Add = () => {
    const [book, setBook] = useState({
        title:"",
        desc:"",
        price:"",
        cover:"",
    })
    const navigate = useNavigate();


    const handleChange = (e)=>{
        setBook((prev)=>({...prev, [e.target.name] : e.target.value}))
    };
    console.log(book);

    const handleClick =async(e)=>{
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/books", book);
          navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='form'>
        <h1>ADD NEW BOOK</h1>
        <input type="text" onChange={handleChange} name="title" placeholder='Title'  />
        <input type="text" onChange={handleChange} name="desc" placeholder='Description' />
        <input type="number" onChange={handleChange} name="price" placeholder='Price' />
        <input type="text" onChange={handleChange} name="cover" placeholder='Cover' />
        <button className='formBtn'  onClick={handleClick}>Add</button>
    </div>
  )
}
