const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const admin = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(admin.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;