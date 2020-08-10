var express = require("express");
var router = express.Router();
const { VerificationService } = require("../../../services");

router.post("/verify/email", VerificationService.checkEmail);
router.post("/verify/username", VerificationService.checkUsername);

module.exports = router;
