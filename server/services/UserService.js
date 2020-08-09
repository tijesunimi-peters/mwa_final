// Export all services
const { User } = require("../models");


class UserService {
  static save(req, _, next) {
    const newUser = new User(req.body);
    newUser.save(function(err,result){
      if(err){
        console.log(err)
      }
      else{
        req.passForToken = {
          valid: true,
          user:  { _id: result._id, email: result.email }
        }
        next();
      }
    })
   
  }

  static all(req, _, next) {
    next();
  }

  static findUser(req, _, next) {
    next();
  }
}

module.exports = UserService;
