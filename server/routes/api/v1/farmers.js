var express = require("express");
var router = express.Router();
var { FarmersService, JwtService } = require("../../../services");

router.use("/farmers", JwtService.checkToken);
router.get("/farmers", FarmersService.getAllFarmers);

module.exports = router;
