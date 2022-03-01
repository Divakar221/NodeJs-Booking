var express= require("express");
// const { MongoGridFSChunkError } = require("mongodb");
var router= express.Router();

const room=require("../Modules/Booking")
const customer=require("../Modules/Customer")

var a=[{a,b,c}]



module.exports= router.get('/get',room.product)
module.exports=router.get('/availableseats',room.seats)
module.exports=router.post('/postdata',room.posting)
//posting room details
// {
//     "_id": "620d2739bfc484497530db6d",
//     "roomName": "1stRoom",
//     "roomId": "r1",
//     "noOfSeatsAvailable": 10,
//     "amenities": {
//         "AC": "available",
//         "roomService": "available"
//     },
//     "price": 15000,
//     "bookingStatus": 0
// }







//Customer Details
module.exports=router.post('/postuser',customer.createCustomer)
// eg {
//     "_id": "620d2a4044db8b2f7cab26af",
//     "roomId": "r2",
//     "customerName": "XXX",
//     "startTime": "11:00 AM",
//     "endTime": "5:00PM",
//     "date": "03/01/22"
// }
