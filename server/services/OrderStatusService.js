const { Order }= require('../models');

class OrderStatus {
// static updated(req, _, next){
//     const newUdate = new order(req.body);
//     // //  let request = await req.findOne({ '_id': ObjectID(req.params.id) });
//     // req.update({'_id': newUpdate._id} ,{$push:{'req': req.body}}, (err,doc)=>{
//     //      if(err){
//     //          console.log("error")
//     //      }else{
//     //          res.json({doc})
//     //      }
         
//     // })
//     // next();

    
// }
static updateStatus(req,_,next){
    const {id} = req.body;
    const{status}=req.body;
    console.log("ghghg")
Order.updateOne({_id:id}, {$set: { status:status}},(err,res)=>{
    if(err){
        next(err);
    }
    req.success = {
        data:"success"
    }
    next();
}).then((result)=>{
    req.success = {
        data:"success"
    }
    next();
}).catch((err)=>{
    next(err);
})


}



// static view(req, _, next){
//     req.db.find({ '_id': 1 }, { projection: { 'name' : 1, 'email' : 1, 'status' :1, 'quantity':1 } })
//     .toArray((err, docs) => {
//         res.status(200).json(docs);
//     });
// }
// //   next();
}

module.exports= OrderStatus;