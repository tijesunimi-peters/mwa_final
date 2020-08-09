var express = require("express");
var router = express.Router();

const { UserService } = require("../../../services");

router.get('/', (req,res) => {
    let events = [
      {
        "_id": "1",
        "email": "abc@a.com",
        "password": "a",
       
      },
      
    ]
    res.json(events)
  })
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
  router.post('/sign', UserService.save)

router.post("/users", UserService.save);
router.get("/users", UserService.all);
router.post("register", UserService.findUser)

module.exports = router;
