const express = require("express")
const PORT = 3000
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome")
})


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})