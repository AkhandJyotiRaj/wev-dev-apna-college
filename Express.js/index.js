const express = require('express');
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("i am on home page");
});

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("hello, i am home page");
});

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("Sahi search kar rha hai bc");
// });

app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(`search result : ${q}`);
});

// app.get("/search", (req, res) => {
//     res.send("i am on search page");
// });

// app.get("/about", (req, res) => {
//     res.send("i am on about page");
// });



// // app.use((req, res) => {
// //     console.log("new incoming request");
// //     res.send({
// //         name: "John",
// //         age: 20,
// //         city: "New York"
// //     })
// // });