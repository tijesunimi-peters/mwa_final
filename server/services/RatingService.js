const { User } = require("../models");
class RatingService {
  static rate(req, _, next) {
    const id = req.body.id;
    const rating = req.body.rate;

    User.updateOne({ _id: id }, { $inc: { rating: rating } }, function (
      err,
      result
    ) {
      if (err) {
          next(err);
      }
      req.success = {
        data: "sucess",
        status: 200,
      };
      next();
    });
  }
}
module.exports = RatingService;
