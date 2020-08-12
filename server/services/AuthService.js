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

  static isSuperAdmin(req, _, next) {
    if(!req.loggedInUser || req.loggedInUser.role !== "superuser") {
      return next({
        status: 400,
        message: "Only for SuperAdmin"
      })
    }
    next();
  }

  static isCustomer(req, _, next) {
    if(!req.loggedInUser || req.loggedInUser.role !== "customer") {
      return next({
        status: 400,
        message: "Only for Customers"
      })
    }
    next();
  }

  static isFarmer(req, _, next) {
    if(!req.loggedInUser || req.loggedInUser.role !== "farmer") {
      return next({
        status: 400,
        message: "Only for Farmers"
      })
    }
    next();
  }

}

module.exports = AuthService;
