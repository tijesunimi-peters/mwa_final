var express = require("express");
var router = express.Router();
const { OrderService } = require("../../../services");

router.post("/orders", OrderService.createOrder);
router.post("/orders/status", OrderService.updateStatus);
router.get("/orders/:customerId", OrderService.getOrders);
router.get("/orders/farmers/:farmerId", OrderService.getOrderforFarmers);


module.exports = router;
