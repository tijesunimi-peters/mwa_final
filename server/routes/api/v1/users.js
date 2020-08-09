var express = require("express");
var express = require('express');
var router = express.Router();

const { UserService } = require("../../../services");
// const { NotExtended } = require("http-errors");
//  router.get('/hello');
// router.post("/users", UserService.save);
// router.post('/users/sign',UserService.login);
  // router.get('/', function(req, res, next) {
  //   res.send('respond with a resource');
  // });
  
 router.post('/sign', UserService.save);


router.post("/users", UserService.login);
// router.post("register", UserService.findUser)

module.exports = router;
