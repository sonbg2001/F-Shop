
const productRouter = require('./product');
const siteRouter = require('./site');
function route(app) {
    app.use('/product', productRouter);     
    app.get('/admin-customer', (req, res) => {
    res.render('admin-customer');
    })
    app.use('/', siteRouter);
}

module.exports = route;