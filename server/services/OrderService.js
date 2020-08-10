const { Order } = require("../models");

class OrderService {
  static createOrder(req, _, next) {
    let newOrder = new Order(req.body);
    newOrder.save(function (err, order) {
      if (err) return next(err);
      req.success = {
        status: 200,
        data: order
      };
      next();
    });
  }

  static updateStatus(req, _, next) {
    const { id } = req.body;
    const { status } = req.body;

    Order.updateOne({ _id: id }, { $set: { status: status } })
      .then(result => {
        req.success = { data: "success" };
        next();
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = OrderService;
