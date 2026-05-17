const express = require("express")
const app = express();

app.get('/', (req, res) => {
    req.send("hello node.js app.");
})

app.get("/about", (req, res) => {
    console.log("About Us second time page fixed");
})

app.get("/contact", (req, res) => {
    console.log("This is contact page.");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000.");
})