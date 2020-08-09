var express = require("express");
var express = require('express');
var router = express.Router();

const { UserService, JwtService } = require("../../../services");

router.post("/users", UserService.save, JwtService.generateToken);
router.get("/users", UserService.all);

module.exports = router;
