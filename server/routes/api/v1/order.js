var express = require("express");
var router = express.Router();
const { OrderService } = require("../../../services");

router.post("/orders", OrderService.createOrder);
router.post("/orders/status", OrderService.updateStatus);

module.exports = router;
