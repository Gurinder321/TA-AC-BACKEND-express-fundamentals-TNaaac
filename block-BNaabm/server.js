const express = require("express");
const PORT = 4000
const app = express();

app.use((res, req, next) => {
    console.log(req.method, req.url)
    next()
})

app.get('/', (req, res) => {
    res.send("welcome")
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})