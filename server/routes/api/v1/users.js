var express = require("express");
var router = express.Router();

const { UserService } = require("../../../services");

router.post("/users", UserService.save);
router.get("/users", UserService.all);

module.exports = router;
