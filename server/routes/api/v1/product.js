var express = require("express");
var router = express.Router();

const { ProductService, ImageService, JwtService, AuthService } = require("../../../services");

router.use("/products", JwtService.checkToken)
router.post("/products", AuthService.isFarmer, ImageService.upload.single("image"), ProductService.save);
router.get("/products", ProductService.all);
router.get("/products/all/:farmer_id", ProductService.findProductByFarmer);
router.delete("/products/:product_id", ProductService.removeProduct);
router.get("/products/:product_id", ProductService.findone);
module.exports = router;
