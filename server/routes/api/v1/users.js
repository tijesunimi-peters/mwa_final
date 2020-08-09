var express = require("express");
var express = require('express');
var router = express.Router();

const { UserService } = require("../../../services");

router.post("/users", UserService.save);

module.exports = router;
