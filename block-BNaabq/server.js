const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(logger('dev'));

app.use((req, res, next) => {
  console.log(req.cookies);
});

app.use('/about', (req, res, next) => {
  res.cookie('username', 'xyz');
  res.end('About page');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
