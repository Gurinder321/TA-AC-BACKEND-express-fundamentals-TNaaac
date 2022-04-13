const express = require('express');
const PORT = 3000;
const logger = require('cookie-parser');
const app = express();

app.use(logger('dev'));

app.use('/admin', (req, res, next) => {
  if (req.url === 'admin') {
    return next('Unauthorized');
  }

  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
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
