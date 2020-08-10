var express = require("express");
var router = express.Router();
const { OrderService } = require("../../../services");

router.post("/orders", OrderService.createOrder);
router.get("/orders/:customerId", OrderService.getOrders);
router.get("/orders/farmers/:farmerId", OrderService.getOrderforFarmers);


module.exports = router;
