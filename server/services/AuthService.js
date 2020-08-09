const User = require("../models/User");

class AuthService {
  static authenticate(req, _, next) {
    req.authUser.comparePassword(req.body.password, (err, valid) => {
      if(err) return next(err);

      if (valid) {
        req.passForToken = {
          valid: true,
          user: { _id: req.authUser._id, email: req.authUser.email }
        }
        return next();
      }
      else {
        return next({ message: "Email or Password incorrect", status: 400 })
      }
    });
  }

  static isAuthenticated(req, _, next) {
    next();
  }
}

module.exports = AuthService;
