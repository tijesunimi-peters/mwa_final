const { Router } = require("express");
const { AuthService, UserService, JwtService } = require("../../../services");

const router = new Router();

router.post(
  "/signin",
  UserService.findUser,
  AuthService.authenticate,
  JwtService.generateToken
);

module.exports = router;
