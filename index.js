const express = require("express");
const app = express();
const path = require("path")
app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.get("/", (req, res) => {
    res.sendFile(path.join(C:\Website Stuff\Assign1/userPage.html, 'public'));
})
app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000/");
});