const { User } = require("../models");

class VerificationService {
  static checkEmail(req, _, next) {
    let query = { email: req.body.email };
    User.findOne(query, function (err, user) {
      if (err) {
        return next(err);
      }

      if (user) {
        return next({
          status: 400,
          message: { exists: true },
        });
      } else {
        req.success = {
          status: 200,
          data: { exists: false },
        };
        return next();
      }
    });
  }

  static checkUsername(req, _, next) {
    let query = { username: req.body.username };
    User.findOne(query, function (err, user) {
      if (err) {
        return next(err);
      }

      if (user) {
        return next({
          status: 400,
          message: { exists: true },
        });
      } else {
        req.success = {
          status: 200,
          data: { exists: false },
        };
        return next();
      }
    });
  }
}

module.exports = VerificationService;
