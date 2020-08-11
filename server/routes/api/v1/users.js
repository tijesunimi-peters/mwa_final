var express = require("express");
var router = express.Router();

const { UserService, JwtService,EmailService } = require("../../../services");
const { route } = require("./order");

router.post("/users", UserService.save, JwtService.generateToken, EmailService.sendMail);
router.get("/users", UserService.all);
<<<<<<< HEAD

module.exports = router;
=======
module.exports = router;
>>>>>>> 6b864ad52d19952c9f645af087abb7055abd7690
