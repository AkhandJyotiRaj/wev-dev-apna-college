const express = require("express");

const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}));

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    
    console.log("You are in home page");
    res.send(`standard GET response. user: ${user}, password: ${password}`);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("YOu are sending anything");
})


app.listen(port, () => {
    console.log(`listening to port ${port}`);
}) 