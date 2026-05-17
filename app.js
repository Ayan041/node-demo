const express = require("express")
const app = express();

app.get('/', (req, res) => {
    req.setEncoding("hello node.js app.");
})
app.get("/about", (req, res) => {
    console.log("About page.");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000.");
})