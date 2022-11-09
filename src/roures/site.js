const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
router.get('/detail', siteController.detail)
router.get('/add', siteController.addForm)
router.post('/add', siteController.add)
router.get('/', siteController.index)
module.exports = router;