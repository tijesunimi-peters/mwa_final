var express = require("express");
var router = express.Router();

const { ProductService, ImageService } = require("../../../services");

router.post("/products", ImageService.upload.single("image"), ProductService.save);
router.get("/products", ProductService.all);
router.get("/products/:farmer_id", ProductService.findProductByFarmer);

module.exports = router;
