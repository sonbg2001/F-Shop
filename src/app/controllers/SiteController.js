const Product = require('../models/Product')
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class SiteController {
    // [GET] /
    index(req, res, next) {

        Product.find({}).limit(8)
            .then(products => {                
                res.render('home', {
                    products: mutipleMongooseToObject(products)
                });
            }).catch(next);       

    }
    // [GET] /add
    addForm(req, res, next) {
        res.render('admin-product')          
    }
    // [POST] /add
    add(req, res, next) {
        let dataProducts = [
            {
                "id": 2,
                "name": "Áo phông nữ cộc tay",
                "price": 37,
                "discount": 15,
                "type": "shirt",
                "description": "Áo thun nữ ,áo phông nữ cộc tay phối cổ dáng rộng 3 màu cực xinh",
                "image": "assets/images/ao2.webp"
            },
            {
                "id": 3,
                "name": "Áo thun bóng rổ nữ",
                "price": 62,
                "discount": 8,
                "type": "shirt",
                "description": "Áo thun bóng rổ nữ - áo phông cộc tay phom rộng in số 11 phong cách hàn quốc",
                "image": "assets/images/ao3.webp"
            },
            {
                "id": 4,
                "name": "Áo thun bóng rổ nữ",
                "price": 62,
                "discount": 8,
                "type": "shirt",
                "description": "Áo thun bóng rổ nữ - áo phông cộc tay phom rộng in số 11 phong cách hàn quốc",
                "image": "assets/images/ao4.webp"
            },
            {
                "id": 5,
                "name": "Áo thun unisex",
                "price": 340,
                "discount": 20,
                "type": "shirt",
                "description": "Áo thun unisex Khổng Hiền from rộng cổ tròn tay lỡ freesize 38-70kg - LAVE OFF",
                "image": "assets/images/ao5.webp"
            },
            {
                "id": 6,
                "name": "Áo phông tay lỡ",
                "price": 340,
                "discount": 22,
                "type": "shirt",
                "description": "Áo phông, Áo thun unisex from rộng cổ tròn tay lỡ freesize 38-70kg Tim nhỏ",
                "image": "assets/images/ao6.webp"
            },
            {
                "id": 7,
                "name": "Áo thun unisex",
                "price": 240,
                "discount": 18,
                "type": "shirt",
                "description": "Áo phông, Áo thun unisex from rộng cổ tròn tay lỡ freesize 38-70kg Ghost",
                "image": "assets/images/ao7.webp"
            },
            {
                "id": 8,
                "name": "Áo thun unisex Khổng Hiền",
                "price": 566,
                "discount": 48,
                "type": "shirt",
                "description": "Áo thun unisex Khổng Hiền from rộng cổ tròn tay lỡ freesize 38-70kg thun trắng",
                "image": "assets/images/ao8.webp"
            },
            {
                "id": 9,
                "name": "Áo phông rộng freesize",
                "price": 345,
                "discount": 32,
                "type": "shirt",
                "description": "Áo phông rộng freesize nam nữ unisex chất đẹp from chuẩn",
                "image": "assets/images/ao9.webp"
            },
            {
                "id": 10,
                "name": "ÁO SMOCKING KATE",
                "price": 500,
                "discount": 22,
                "type": "shirt",
                "description": "ÁO SMOCKING KATE CAO CẤP SEXY",
                "image": "assets/images/ao10.webp"
            },
            {
                "id": 11,
                "name": "Quần ống rộng nữ 1 cúc",
                "price": 390,
                "discount": 6,
                "type": "trousers",
                "description": "Quần ống rộng nữ 1 cúc trước chất tuyết mưa nhiều màu tự nhiên",
                "image": "assets/images/quan1.webp"
            },
            {
                "id": 12,
                "name": "Quần bò ống rộng nữ cạp cao",
                "price": 103,
                "discount": 23,
                "type": "trousers",
                "description": "Quần bò ống rộng nữ cạp cao, quần jeans ống rộng lưng cao, dáng suông baggy ống đứng, kiểu ulzzang Cherry T008",
                "image": "assets/images/quan2.webp"
            },
            {
                "id": 13,
                "name": "Quần jean nữ co dãn Julido Store",
                "price": 139,
                "discount": 16,
                "type": "trousers",
                "description": "Quần jean nữ co dãn Julido Store, lưng cao mẫu mới màu đen JD8888",
                "image": "assets/images/quan3.webp"
            },
            {
                "id": 14,
                "name": "Quần jean nữ lưng cao Julido",
                "price": 126,
                "discount": 22,
                "type": "trousers",
                "description": "Quần jean nữ lưng cao Julido, chất jean cotton co dãn tôn dáng phụ nữ eo thon mẫu KV03A",
                "image": "assets/images/quan4.webp"
            },
            {
                "id": 15,
                "name": "Quần giả váy nữ ngắn vạt lệch đính cúc",
                "price": 250,
                "discount": 21,
                "type": "trousers",
                "description": "Quần giả váy nữ ngắn vạt lệch đính cúc, Quần đùi giả váy vạt lệch",
                "image": "assets/images/quan5.webp"
            },
            {
                "id": 16,
                "name": "Quần yếm kaki Banamo fashion",
                "price": 225,
                "discount": 27,
                "type": "trousers",
                "description": "Quần yếm kaki Banamo fashion ống rộng dáng dài phối túi ngực màu be phong cách hàn quốc quần yếm kaki 565",
                "image": "assets/images/quan6.webp"
            },
            {
                "id": 17,
                "name": "Quần đùi nữ cạp chun RÚT DÂY",
                "price": 170,
                "discount": 10,
                "type": "trousers",
                "description": "Quần đùi nữ cạp chun RÚT DÂY <55kg vải thun cotton short hot tiktok sooc cạp cao thể thao sexy aomi",
                "image": "assets/images/quan7.webp"
            },
            {
                "id": 18,
                "name": "Quần yếm nữ King168",
                "price": 180,
                "discount": 5,
                "type": "trousers",
                "description": "Quần yếm nữ King168, yếm short nữ co dãn nhẹ mẫu mới DC13",
                "image": "assets/images/quan8.webp"
            },
            {
                "id": 19,
                "name": "Quần Jean Nữ Lưng Cao thương hiệu Chandi",
                "price": 290,
                "discount": 33,
                "type": "trousers",
                "description": "Quần Jean Nữ Lưng Cao thương hiệu Chandi, chất jean cotton co dãn tôn dáng phụ nữ eo thon mẫu KV617",
                "image": "assets/images/quan9.webp"
            },
            {
                "id": 20,
                "name": "Quần short jean nữ lưng cao phối rách denim cotton",
                "price": 300,
                "discount": 50,
                "type": "trousers",
                "description": "Quần short jean nữ lưng cao phối rách denim cotton, rin ngắn phối rách William - AT87",
                "image": "assets/images/quan10.webp"
            },
            {
                "id": 21,
                "name": "Giày thể thao nữ GB2.5",
                "price": 227,
                "discount": 12,
                "type": "shoes",
                "description": "Giày thể thao nữ đi êm chân - GB2.5",
                "image": "assets/images/giay1.webp"
            },
            {
                "id": 22,
                "name": "Giày nữ thấp cổ thêu hoa",
                "price": 160,
                "discount": 17,
                "type": "shoes",
                "description": "Giày nữ thấp cổ thêu hoa cúc siêu đáng yêu",
                "image": "assets/images/giay2.webp"
            },
            {
                "id": 23,
                "name": "GIÀY NỮ | GIÀY THỂ THAO",
                "price": 550,
                "discount": 14,
                "type": "shoes",
                "description": "GIÀY NỮ | GIÀY THỂ THAO & THỜI TRANG",
                "image": "assets/images/giay3.webp"
            },
            {
                "id": 24,
                "name": "GIÀY SNEAKERS NỮ",
                "price": 250,
                "discount": 12,
                "type": "shoes",
                "description": "GIÀY SNEAKERS NỮ KIỂU DÁNG TRẺ TRUNG THANH LỊCH",
                "image": "assets/images/giay4.webp"
            },
            {
                "id": 25,
                "name": "Giày thể thao nữ phong cách Hàn quốc",
                "price": 524,
                "discount": 25,
                "type": "shoes",
                "description": "Giày thể thao nữ đế dày phong cách Hàn quốc mẫu mới nhất 2020 siêu đẹp",
                "image": "assets/images/giay5.webp"
            },
            {
                "id": 26,
                "name": "Giày Biti's DSM074400XNH",
                "price": 330,
                "discount": 3,
                "type": "shoes",
                "description": "Giày Thể Thao Trung Cấp Nam Biti's DSM074400XNH",
                "image": "assets/images/giay6.webp"
            },
            {
                "id": 27,
                "name": "Giày Nam Trắng các loại",
                "price": 204,
                "discount": 10,
                "type": "shoes",
                "description": "Giày Nam Thể Thao Nam Nữ Thời Trang (Trắng các loại)",
                "image": "assets/images/giay7.webp"
            },
            {
                "id": 28,
                "name": "Giày nam K99",
                "price": 270,
                "discount": 11,
                "type": "shoes",
                "description": "Giày thể thao nam, giày nam da lộn K99",
                "image": "assets/images/giay8.webp"
            },
            {
                "id": 29,
                "name": "Giày Nam Sneaker Live Running",
                "price": 298,
                "discount": 6,
                "type": "shoes",
                "description": "Giày Thể Thao Nam Sneaker Live Running Độn Gót Tăng Chiều Cao 5cm Cao Cấp Tặng Kèm Đồng Hồ Đeo Tay Nam Thời Trang",
                "image": "assets/images/giay9.webp"
            },
            {
                "id": 30,
                "name": "Giày thể thao nam XD21",
                "price": 319,
                "discount": 26,
                "type": "shoes",
                "description": "Giày thể thao nam, giày sneaker nam da Xám - Trắng (2 màu) XD21",
                "image": "assets/images/giay10.webp"
            }
        ];
        res.send(dataProducts);    
    }
    // [POST] /detail
    detail(req, res, next) {              
        Product.findOne({name: req.query.name})
            .then((product) => {
                res.render('product-detail', {
                    product: mongooseToObject(product)
                });
            }).catch(next);   

    }

}

module.exports = new SiteController;