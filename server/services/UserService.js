
const { User } = require("../models");
const jwt = require('jsonwebtoken');
const { model } = require('mongoose')




class UserService {
  static save(req, _, next) {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)
      } else {
        let payload = { subject: registeredUser._id }
        let token = jwt.sign(payload,'dg344')
        req.status(200).send({ token })
      }
    })
    next();
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

  static login(req, _, next) {
    let userData = req.body

   
   User.findOne({ email: userData.email }).then((result)=>{
      result.comparePassword(userData.password, (err, result) => {
            if (result) {
              req.success = {
                data: "logged in"
              }
              next();
            }
              else {
                next(err)
              }
    });
  

  })


  }
}

module.exports = UserService;
