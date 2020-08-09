
const runService = require('./WorkerService')

class EmailService {
  static sendMail(req, _, next) {
    const user = req.body;
    runService(user);
    req.success = { status: 200, data: "Check your email" };
    next()
   
  }
}

module.exports = EmailService;
