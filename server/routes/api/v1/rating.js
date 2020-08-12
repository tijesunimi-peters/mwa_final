var express = require("express");
var router = express.Router();
var {UserService, JwtService} = require('../../../services')

router.use(JwtService.checkToken)
router.put("/users/farmers/rating",UserService.rate)


module.exports=router;