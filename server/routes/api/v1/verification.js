var express = require("express");
var router = express.Router();
const { VerificationService, JwtService, UserService } = require("../../../services");

router.post("/verify/email", VerificationService.checkEmail);
router.post("/verify/username", VerificationService.checkUsername);
router.post("/verify/token", JwtService.verifyToken, UserService.verifyUser);

module.exports = router;
