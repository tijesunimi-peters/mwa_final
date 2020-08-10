const { User } = require("../models");

class FarmersService{
  static getAllFarmers(req, _ , next) {
    User.find({ role: "farmer" }, function (err, result) {
      if (err) {
        next(err);
      }
      req.success = {
        data: result,
        status: 200,
      };
      next();
    });
  }

}
module.exports = FarmersService;
