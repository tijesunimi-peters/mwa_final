var express = require("express");

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

  static getOrders(req, _, next) {
    const customerId = req.params.customerId;
    var query = { "customer._id": req.params.customerId };
    // let findOrder = new Order();
    console.log(customerId);
    Order.find(query, function (err, found) {
      if (err) return next(err);

      req.success = {
        status: 200,
        data: found,
      };
      next();
    });
  }
}

module.exports = OrderService;
