var express = require("express");
var router = express.Router();

const { ProductService } = require("../../../services");

router.post("/products", ProductService.save);
router.get("/products", ProductService.all);

module.exports = router;
