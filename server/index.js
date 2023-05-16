import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Darkaint@7978",
    database : "test"
})

app.get("/", (req,res)=>{
    console.log("Hello! this is backend using MySQL");
})

app.get("/books", (req,res)=>{
    const q  = "SELECT * FROM books"
    db.query(q, (err,data)=>{
        if(err) return res.json(err);

        return res.json(data);

    })
})

app.listen(5000, ()=>{
console.log("Connected to backend!..");
});