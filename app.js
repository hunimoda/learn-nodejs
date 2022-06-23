const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// parse body
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);  // common path filter
app.use(shopRoutes);

// 404 page not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);