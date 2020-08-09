var express = require("express");
var router = express.Router();
const { OrderService } = require("../../../services");

router.post("/createNew", OrderService.createOrder);
// router.post("/users", UserService.save);
module.exports = router;
