var express = require("express");
var router = express.Router();

const { ProductService } = require("../../../services");

router.post("/addProducts", ProductService.save);
router.get("/allProducts", ProductService.all);

module.exports = router;
