const { Worker, isMainThread, parentPort } = require("worker_threads");
const path = require("path");
const runService = require('./workerService')

class EmailService {
  static sendMail(req, _, next) {
    const user = req.body;
    runService(user);
    req.success = { status: 200, data: "Check your email" };
    next()
   
  }
}

module.exports = EmailService;
