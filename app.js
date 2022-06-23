const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse body
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (_, res) => {
  res.send('<form action="/product", method="POST">' +
           '<input type="text" name="title" />' + 
           '<button type="submit">Add Product</button></form>');
});
app.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});
app.use('/', (req, res, next) => {
  res.send('index');
});

app.listen(3000);