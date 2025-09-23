const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');


// app.use((req, res, next) => {
//     console.log('Hi i am 1st middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Hi i am 2nd middleware');
//     next();
// });

// app.use((req, res, next) => {
//     req.time = Date.now();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

// specific middleware
// app.use('/random', (req, res, next) => {
//     console.log('Hi i am random middleware');
//     next();
// });

// app.use("/api", (req, res, next) =>
//     {
//     let { token } = req.query;
//     if (token === "access") {
//         next();
//     }
//     res.send("401 unauthorized");
//     });

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "access") {
        return next();
    }
    throw new ExpressError(401, "Access denied");
};

app.get("/api", checkToken, (req, res) => {
    res.send("ACCESS granted");
});

app.get('/', (req, res) => {
    res.send('Hi i am root');
});

app.get('/random', (req, res) => {
    res.send('HI i am random');
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access is Forbidden");
});

app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.message || "Internal Server Error";
    res.status(status).send(message);
});

app.use((req, res) => {
    res.send('404 not found page');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});