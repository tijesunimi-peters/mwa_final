const User = require("../models/User");
const jwt = require("jsonwebtoken");

class AuthService {
  static authenticate(req, _, next) {
    next();
  }

  static isAuthenticated(req, _, next) {
    next();
  }
}

module.exports = AuthService;
