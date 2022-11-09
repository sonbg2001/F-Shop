const Product = require('../models/Product')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class ProductController {

    // [GET] /product
    index(req, res, next) {

        Product.find({})
            .then(products => {                
                res.render('product', {
                    products: mutipleMongooseToObject(products)
                });
            }).catch(next);       

    }
}

module.exports = new ProductController;