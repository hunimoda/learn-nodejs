const http = require('http');
const indexHTML = `<html>
<head>
  <title>Index Page for Assignment 1</title>
<head>
<body>
  <h1>Hello from Assignment 1</h1>
  <form action="/create-user" method="POST">
    <label for="username">username: </label>
    <input type="text" id="username" name="username" autofocus />
    <button type="submit">Submit</button>
  </form>
</body>
</html>
`;
const usersHTML = `<html>
<head>
  <title>Users Page for Assignment 1</title>
<head>
<body>
  <h1>List of Dummy Users</h1>
  <ul>
    <li>User 1</li>
    <li>User 2</li>
    <li>User 3</li>
    <li>User 4</li>
    <li>User 5</li>
  </ul>
</body>
</html>
`;
const requestListener = (req, res) => {
  if (req.url === '/') {
    res.write(indexHTML);
  } else if (req.url === '/users') {
    res.write(usersHTML);
  } else if (req.url === '/create-user' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => body.push(chunk));
    req.on('end', () => {
      console.log(Buffer.concat(body).toString().split('=')[1]);
    });
    res.statusCode = 302;  // redirect
    res.setHeader('Location', '/');
  } else {
    res.write('404 PAGE NOT FOUND');
  }
  res.end();
}
const server = http.createServer(requestListener);
server.listen(3000);