
const { User } = require("../models");
const jwt = require('jsonwebtoken');

class UserService {
  static save(req, _, next) {
    next();
  }

  static all(req, _, next) {

    let user = User.find({}).then((result) => {

      req.success = ({
        data: result,
        status: 200
      })
      next();
    }).catch(err => next(err));

  }

  static login(req, _, next) {
    let userData = req.body


    User.findOne({ email: userData.email }).then((result) => {
      result.comparePassword(userData.password, (err, result) => {
        if (result) {
          req.success = {
            data: "logged in"
          }
          next();
        }
        else {
          next(err)
        }
      });


    })


  }
}

module.exports = UserService;
