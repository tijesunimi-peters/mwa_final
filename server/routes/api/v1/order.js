var express = require("express");
var router = express.Router();
const { OrderService, JwtService } = require("../../../services");

router.use(JwtService.checkToken)
router.post("/orders", OrderService.createOrder);
router.get("/orders", OrderService.all);
router.post("/orders/status", OrderService.updateStatus);
router.get("/orders/:customerId", OrderService.getOrders);
router.get("/orders/farmers/:farmerId", OrderService.getOrderforFarmers);


module.exports = router;
