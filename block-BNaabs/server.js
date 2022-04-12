const express = require('express');
const PORT = 4000;
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.json(req.query);
});

app.get('users/:username', (req, res) => {
  const username = req.params.username;
  res.send(username);
});

app.post('/new', (req, res) => {
  res.json(req.query);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
