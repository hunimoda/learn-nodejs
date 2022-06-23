const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('in middleware 1');
  next();
});
app.use((req, res, next) => {
  console.log('in middleware 2');
  res.send('<h1>Hello from Express.js</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);