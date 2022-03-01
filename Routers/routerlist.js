var express= require("express");
// const { MongoGridFSChunkError } = require("mongodb");
var router= express.Router();
var list=require("../Modules/List")



module.exports= router.get('/getList',list.allList)
module.exports=router.get('/getUsers',list.allUsers)
module.exports=router.get('/getBookedData',list.bookedUser)



// room/getList =>List  of the rooms
// room/getUsers =>List of all Users
// room/getBookedData =>List of booked rooms