var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../services/UserService')


/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/sign', User.save)


module.exports = router;
