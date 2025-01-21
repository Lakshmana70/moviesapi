const express = require("express");
const app=express()
 const fs=require("fs")
 const corse=require("cors")
 app.use(corse())
app.get("/movies",(req,res)=>{
    const data=fs.readFileSync("movies.json")
    // console.log(JSON.parse(data))
    res.json(JSON.parse(data))
   
})

app.get("/movies/:id",(req,res)=>{
    const data=fs.readFileSync("movies.json")
    const movies=JSON.parse(data)
    const id=req.params.id
    const movie=movies.find((movie)=>movie.id==id)
    res.json(movie)
})

app.get("/movies/title/:Title",(req,res)=>{
    
    const data=fs.readFileSync("movies.json")
    const movies=JSON.parse(data)
    const Title=req.params.Title
    const movie=movies.find((movie)=>movie.Title==Title)
    console.log("movie")
    res.json(movie)
})
app.listen(4500,()=>{
    
    console.log("server is running on port 4500")
})