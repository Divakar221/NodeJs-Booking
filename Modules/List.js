const mongo=require('../shared/connect')

module.exports.allList= async(req,res,next)=>{

    try {
        var data = await mongo.db.collection("room").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.allUsers=async(req,res,next)=>{

    try {
        console.log("Data coming")
        var data = await mongo.db.collection("customer").find().toArray();
        res.send(data);
        
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports.bookedUser=async(req,res,next)=>{

        try {
            var data = await mongo.db.collection("room").find({bookingStatus:1}).toArray();
            res.send(data);
        } catch(err) {
            console.log(err);
            res.status(500).send(err);
        }
    }