const { User } = require("../models");

class FarmersService {
  static getAllFarmers(req, _, next) {
    const sorter = {  };

    if(req.query.rating) {
      sorter['rating'] = parseInt(req.query.rating || 1);
    }

    User.find({ role: "farmer" }, { password: 0 }, { sort: sorter }, function (
      err,
      result
    ) {
      if (err) {
        next(err);
      }
      req.success = {
        data: result,
        status: 200
      };
      next();
    });
  }
}
module.exports = FarmersService;
