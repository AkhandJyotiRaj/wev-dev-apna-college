const express = require("express");

const app = express();

const port = 8080;

app.use(express.static("public"));
app.set(express.static(path.join(__dirname, "public")));

const path = require("path");
const { execPath } = require("process");
app.set("views", path.join(__dirname, "/views")) 
 

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    console.log(data);
    if (data) {
        res.render("ig.ejs", { data });
    }
    else {
        res.render("error.ejs");
    }
});


app.get("/rolldice", (req, res) => {
    let dicval = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num : dicval });
});

app.get("/hello", (req, res) => {
    res.send("hello");
})
app.listen(port, () => {
    console.log(`Listening of port ${port}`);
});
