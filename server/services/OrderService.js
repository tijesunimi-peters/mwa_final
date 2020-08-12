var express = require("express");
var {
    Types
} = require("mongoose")

const {Order} = require("../models");

class OrderService {
    static setFilters(req, _, next) {
        const filters = {};
        if(req.query.filterByDate) {
            const startTime = new Date(req.query.filterByDate);
            let endTime = new Date(req.query.filterByDate);
            endTime.setDate(endTime.getDate() - 1);
            filters['created_at'] = { $lte: startTime.toISOString(), $gte: endTime.toISOString() }
        }

        if(req.query.filterByStatus) {
            filters['status'] = req.query.filterByStatus
        }

        req.orderFilter = filters;

        next();
    }

    static all(req, _, next) {
        Order.find(req.orderFilter).limit(10).then(orders => {
            req.success = {
                status: 200,
                data: orders
            }
            next();
        }).catch(next)
    }

    static createOrder(req, _, next) {
        let newOrder = new Order(req.body);
        newOrder.save(function (err, order) {
            if (err) 
                return next(err);
            
            req.success = {
                status: 200,
                data: order
            };
            next();
        });
    }

    static updateStatus(req, _, next) {
        const {id} = req.body;
        const {status} = req.body;

        Order.updateOne({
            _id: id
        }, {
            $set: {
                status: status
            }
        }).then(result => {
            req.success = {
                data: "success"
            };
            next();
        }).catch(err => {
            next(err);
        });
    }

    static getOrders(req, _, next) {
        var query = {
            "customer._id": req.params.customerId,
            ...(req.orderFilter || {})
        };
        Order.find(query, function (err, found) {
            if (err) 
                return next(err);
            

            req.success = {
                status: 200,
                data: found
            };
            next();
        });
    }

    static getOrderforFarmers(req, _, next) {

        var query = {
            ...(req.orderFilter || {}),
            products: {
                $elemMatch: {
                    "farmer._id": new Types.ObjectId(req.params.farmerId)
                }
            }
        }
        Order.find(query, function (err, found) {


            if (err) 
                return next(err);
            

            req.success = {
                status: 200,
                data: found
            };
            next();
        });

    }
}

module.exports = OrderService;
