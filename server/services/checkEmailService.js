const { User } = require("../models");

class checkEmailService {
  static checkEmail(req, _, next) {
    let query = { email: req.params.email };
    User.findOne(query, function (err, user) {
      if (err) {
        console.log(err);
      }

      if (user) {
        console.log("Email address is taken"),
          (req.success = {
            status: 200,
            data: user,
          });
      }
      next();
    });
  }
}

module.exports = checkEmailService;
