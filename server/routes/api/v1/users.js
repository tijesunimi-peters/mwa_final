var express = require("express");
var router = express.Router();

const { UserService, JwtService,EmailService } = require("../../../services");
const { route } = require("./order");

router.post("/users", UserService.save, JwtService.generateToken, EmailService.sendMail);
router.get("/users", UserService.all);

module.exports = router;
