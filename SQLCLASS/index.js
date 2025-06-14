const { faker } = require('@faker-js/faker');  
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"))
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// app.use("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'akhand',
});
  
let  getRandomUser = () =>{
    return [
      faker.string.uuid(),
       faker.internet.username(), // before version 9.1.0, use userName()
       faker.internet.email(),
       faker.internet.password(),
    ];
}
  



// connection.end();


app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;

    try {
        connection.query(q, (err, users ) => {
            if (err) throw err;
            res.render("showuser.ejs",{ users });
        });
    
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

// UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("Sab gandu bhul hi jaate hai");
            } else {
                let q2 = `UPDATE user SET username='${newUsername}'   WHERE id='${id}'`;
                connection.query(q2,(err, result) => {
                    if(err)  throw err;
                    res.redirect("/user");
                })
            }
        });
    
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
})

app.listen("8080", () => {
    console.log("Server is listing to port 8080");
})


// let q = " INSERT INTO user(id,username,email, password) VALUES ?";
// let users = [
//     ["123ddc", "123_newusder", "abcd@gmail.com", "adbc"],
//     ["232cd","akhandd_123","adhkand@gmail.com","adkhandji"],
// ];

// let data = [];
// for (let i = 1; i <= 100; i++){
//     data.push((getRandomUser()));
// }

