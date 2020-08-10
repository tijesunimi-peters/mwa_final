var express = require("express");
var router = express.Router();
var {UserService} = require('../../../services')

router.put("/users/farmers/rating",UserService.rate)


module.exports=router;