var express = require("express");
var router = express.Router();

const { ProductService } = require("../../../services");
const upload =  require("../../../services/ProductImagesService");

router.post("/products", ProductService.save);
router.get("/products", ProductService.all);
router.get("/products/:farmer_id", ProductService.findProductByFarmer);

module.exports = router;
