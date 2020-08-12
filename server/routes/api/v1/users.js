var express = require("express");
var router = express.Router();

const { UserService, JwtService,EmailService, AuthService } = require("../../../services");

router.post("/users", UserService.save, JwtService.generateToken, EmailService.sendMail);

router.get("/users", JwtService.checkToken, AuthService.isSuperAdmin, UserService.all);
module.exports = router;
