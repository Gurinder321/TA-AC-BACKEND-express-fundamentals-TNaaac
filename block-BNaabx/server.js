const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send(req.method, req.url);
  next();
});

app.listen(3000);
