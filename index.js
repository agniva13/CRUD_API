const express=require("express");
const mongoose=require("mongoose");
require('dotenv').config();

const productRouter=require('./routes/productRoutes');

const app=express();

const mongodburl=process.env.MongoDB_URL;
mongoose.connect(mongodburl);

const db=mongoose.connection;
db.on("error",console.error.bind(console,"MongodB connection error=>"));
db.once("open",() => {
    console.log("Connected to database succesfully!");
})

app.use(express.json());
app.use(productRouter);

//app.get("/",function(req,res){
//    res.send("Hi There");
//})

app.listen(4000,'0.0.0.0',()=>{
    console.log("Server started at port 4000");
});
