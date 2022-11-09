const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f_Shop_dev');
        
        console.log("db connect successfully")
    } catch (error) {
        console.log("db connect fail")
    }
}



module.exports = {connect}
