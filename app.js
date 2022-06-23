const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// parse body
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

// 404 page not found
app.use((req, res, next) => {
  res.status(404).send('<h1>404 page not found</h1>');
});

app.listen(3000);