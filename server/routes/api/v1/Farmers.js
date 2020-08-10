var express = require("express");
var router = express.Router();
var { Farmers } = require("../../../services");

router.get("/Farmers", Farmers.getAllFarmers);

module.exports = router;
