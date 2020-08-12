var express = require("express");
var router = express.Router();
const { OrderService, JwtService, AuthService } = require("../../../services");


router.use("/orders", JwtService.checkToken)
router.post("/orders", AuthService.isCustomer, OrderService.createOrder);
router.get("/orders", OrderService.setFilters, AuthService.isSuperAdmin, OrderService.all);
router.post("/orders/status", OrderService.updateStatus);
router.get("/orders/:customerId", OrderService.setFilters, OrderService.getOrders);
router.get("/orders/farmers/:farmerId", OrderService.setFilters, OrderService.getOrderforFarmers);


module.exports = router;
