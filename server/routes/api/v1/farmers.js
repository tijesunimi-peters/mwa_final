var express = require("express");
var router = express.Router();
var { FarmersService } = require("../../../services");

router.get("/farmers", FarmersService.getAllFarmers);

module.exports = router;
