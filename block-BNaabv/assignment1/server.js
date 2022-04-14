const express = require('express');
const PORT = 3000;
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(logger('dev'));

app.use((req, res, next) => {
  res.cookie('username', 'xyz');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  console.log(req.body);
});

app.get('/users/:username', (req, res) => {
  const username = req.params.username;
  res.send(`<h2>${username}</h2>`);
});

// 404 middleware
app.use((req, res, next) => {
  res.send('Page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
