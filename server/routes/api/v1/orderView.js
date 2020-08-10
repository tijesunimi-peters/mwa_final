var express = require("express");
var router = express.Router();
var {OrderStatus}=require('../../../services')

router.post("/status",OrderStatus.updateStatus,function(){
    console.log("i am here")
});
module.exports = router;