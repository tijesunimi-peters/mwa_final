var express = require("express");
var router = express.Router();

const { UserService, JwtService,EmailService } = require("../../../services");

router.post("/users", UserService.save, JwtService.generateToken, EmailService.sendMail);
router.use(JwtService.checkToken);
router.get("/users", UserService.all);
module.exports = router;
