const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');

const PORT = 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(__dirname + '/public'));
app.use(logger('dev'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/projects.html');
});

app.get('/users', (req, res) => {
  res.send('<h2>Welcome to the userpage</h2>');
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
