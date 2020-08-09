// Export all services
const { User } = require("../models");

class UserService {
  static save(req, _, next) {
    const newUser = new User(req.body);
    newUser.save(function (err, result) {
      if (err) {
        next(err);
      } else {
        
        req.passForToken = {
          valid: true,
          user: { _id: result._id, email: result.email },
        };
        next();
      }
    });
  }

  static all(req, _, next) {

    let user = User.find({}).then((result) => {

      req.success = ({
        data: result,
        status: 200
      })
      next();
    }).catch(err => next(err));
  }


  static findUser(req, _, next) {
    User.findOne({ email: req.body.email }).then(function (user) {
      if (!user) return next({message: "User is not in our records"});
      req.authUser = user;
      return next();
    }).catch(next)
  }
}

module.exports = UserService;
