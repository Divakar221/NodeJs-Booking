// const {MongoClient} = require('mongodb');

const booking=require("./Routers/router")
const mongo=require("./shared/connect")
const roomlist=require("./Routers/routerlist")
const express=require("express")
const app=express()
app.use(express.json())

const port =process.env.PORT || 3002

// console.log(mongo);




var a=mongo.connect();


//post room, get room details, 
app.use("/booking",booking)

//room is for list all the lists like userdetails,room list, bookedlist
app.use("/room",roomlist)




app.get("/users", function(req,res,next){
    res.send("server starts");
})

app.listen(port, function(){
    console.log("server connected")
  });