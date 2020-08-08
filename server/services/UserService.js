// Export all services
// const { User } = require("../models");

class UserService {
  static save(req, _, next) {
    next();
  }

  static all(req, _, next) {
    next();
  }

  static findUser(req, _, next) {
    next();
  }
}

module.exports = UserService;
