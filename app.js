const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('common to every paths');
  next();
})
app.use('/abc', (req, res, next) => {
  console.log('path to /abc');
  res.send('abc');
});
app.use('/def', (req, res, next) => {
  console.log('path to /');
  res.send('<h1>Hello from Express.js</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);