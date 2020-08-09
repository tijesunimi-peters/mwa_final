var express = require("express");
var router = express.Router();
const { OrderService } = require("../../../services");

router.post("/orders", OrderService.createOrder);

module.exports = router;
