var express = require("express");
var router = express.Router();
var {UserService, JwtService} = require('../../../services')


router.put("/users/farmers/rating", JwtService.checkToken,UserService.rate)


module.exports=router;