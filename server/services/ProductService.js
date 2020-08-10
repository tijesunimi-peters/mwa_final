// Export all services
const {Product} = require("../models");
const {Types} = require('mongoose');

class ProductService {
    static save(req, _, next) {
        if(req.file) req.body.image = req.file.location;
        
        const newProduct = new Product(req.body);
        newProduct.save(function (err, product) {
            if (err) 
                return next(err);

            req.success = {
                status: 200,
                data: product
            }
            next()
        });
    }

    static all(req, _, next) {

        Product.find({}, function (err, product) {
            if (err) 
                return next(err);
            
            req.success = {
                status: 200,
                data: product
            }
            next()
        });

    }

    static findProductByFarmer(req, _, next) {
        const farmer_id = req.params.farmer_id;
        const findProductQuery = {
            'farmer._id': farmer_id
        };
        Product.find(findProductQuery, function (err, docsArr) {
            if (err) 
                return next(err);

            req.success = {
                status: 200,
                data: docsArr
            }
            next();

        })

    }
    static removeProduct(req, _, next) {
        
        const product_id = new Types.ObjectId(req.params.product_id);
        const removeQuery = {
            _id:product_id
        };
        // var user_id = req.params.product_id;
        console.log("hi")
   
        Product.deleteOne(removeQuery, function (err, docsArr) {
            if (err) 
                return next(err);
            console.log(docsArr)
            

        }).then((result)=>{
            console.log(result)
            req.success = {
                status: 200,
                data: "Deleted!"
            }
            next();
        })

    }
}

module.exports = ProductService;
