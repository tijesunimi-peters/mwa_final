var express = require("express");
var router = express.Router();
const { checkEmailService } = require("../../../services");

router.get("/email/:email", checkEmailService.checkEmail);
module.exports = router;
