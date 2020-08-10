var express = require("express");
var router = express.Router();

var usersApi = require("./users");
var authApi = require("./auth");
var orderApi = require("./order");
var prodApi = require("./product");
var verifyUser = require("./verification");
var getFarmers =require("./Farmers")

router.use(authApi);
router.use(usersApi);
router.use(prodApi);
router.use(orderApi);
router.use(verifyUser);
router.use(getFarmers);

router.use(function (req, _, next) {
  if (req.success) {
    return next();
  } else {
    return next({
      message: ["Forbidden"],
      status: 500,
    });
  }
});

module.exports = router;
