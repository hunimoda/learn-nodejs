const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const admin = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = admin.products;
  res.render('shop', {
    products,
    hasProducts: products.length > 0,
    pageTitle: 'Shop',
    path: '/',
    activeShop: true,
    productCss: true,
  });
});

module.exports = router;