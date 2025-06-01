const express = require("express");

const app = express();

const port = 8080;

app.get("/register", (req, res) => {
    console.log("You are in home page");
    res.send("you are in home page")
});

app.post("/register", (req, res) => {
    res.send("YOu are sending anything");
})


app.listen(port, () => {
    console.log(`listening to port ${port}`);
}) 