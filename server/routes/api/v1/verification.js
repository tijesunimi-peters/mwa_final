var express = require("express");
var router = express.Router();
const { verificationService } = require("../../../services");

router.post("/verify/email", verificationService.checkEmail);
router.post("/verify/username", verificationService.checkUsername);

module.exports = router;
