var express = require("express");
var router = express.Router();
const { OrderService } = require("../../../services");

router.post("/orders", OrderService.createOrder);
router.get("/orders/:customerId", OrderService.getOrders);

module.exports = router;
