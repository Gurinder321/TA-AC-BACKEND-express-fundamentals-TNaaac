const express = require("express");
const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post("/json", (req, res) => {
    console.log(req.body)
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
