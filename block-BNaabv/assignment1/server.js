const express = require('express');
const PORT = 3000;
const logger = require('morgan');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.post('/form', (req, res) => {
  console.log(req.body);
});

app.post('/json', (req, res) => {
  console.log(req.body);
});

app.use((req, res, next) => {
  console.log(err);
  res.send('Page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
