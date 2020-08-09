const { Order } = require("../models");

class OrderService {
  static createOrder(req, _, next) {
    let newOrder = new Order(req.body);
    newOrder.save(function (err, order) {
      if (err) return next(err);
      req.success = {
        status: 200,
        data: order,
      };
      next();
    });
  }
}

module.exports = OrderService;
