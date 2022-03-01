
const mongo=require('../shared/connect')

module.exports.createCustomer=async(req,res,next)=>{
    try {
        console.log("User data inserted");
        var end= await  mongo.db.collection("room").findOne({roomId:req.body.roomId});
        // console.log(end.bookingStatus)

            

        if(end.bookingStatus==0){

            // if()
        var data = await mongo.db.collection("customer").insertOne(req.body);
            // console.log("yes");
       await mongo.db.collection("room").updateOne({roomId:req.body.roomId}, { $set: {bookingStatus:1} })
        
           res.send(data)
        
        }else{
        res.send("Room not available")
        }
    
// console.log(end)

        next();
        // console.log(this.db)
        
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}


