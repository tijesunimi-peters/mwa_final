const User = require("../models/User");

class AuthService {
  static authenticate(req, _, next) {
    req.authUser.comparePassword(req.body.password, (err, valid) => {
      if(err) return next(err);

      if (valid) {
        const { password, ...details } = req.authUser.toObject();
        req.passForToken = {
          valid: true,
          user: { ...details }
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
