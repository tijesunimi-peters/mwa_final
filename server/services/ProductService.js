// Export all services
const {Product} = require("../models");

class ProductService {

    static save(req, _, next) {
        const newProduct = new Product(req.body);
        newProduct.save(function (err, product) {
            if (err) return next(err);

            req.success = {
                status: 200,
                data: product
            }
            next()
        });
    }

    static all(req, _, next) {
        
        Product.find({}, function(err, product) {
            if (err) return next(err);

            req.success = {
                status: 200,
                data: product
            }
            next()
          });
        
    }

    static findProductByFarmer(req, _, next) {
        next();
    }
}

module.exports = ProductService;