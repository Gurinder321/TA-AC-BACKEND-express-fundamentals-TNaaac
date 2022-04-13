const express = require('express');
const PORT = 4000;
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  res.json(req.body);
});

app.get('users/:username', (req, res) => {
  const username = req.params.username;
  res.send(username);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
