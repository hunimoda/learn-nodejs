const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');

const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars({
  layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}));
app.set('view engine', 'handlebars');
app.set('views', 'views');

const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// parse body
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', admin.routes);  // common path filter
app.use(shopRoutes);

// 404 page not found
app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);