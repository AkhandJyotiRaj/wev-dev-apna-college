const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);



User.insertMany([
    { name: "akhand", email: "akhand@gmail.com", age: 30 },
    { name: "raj", email: "area@gmail.com", age: 30 },
    { name: "jyoti", email: "akafahand@gmail.com", age: 30 },
]).then((res) => {
    console.log(res);
});



// const user2 = new User({
//     name: "jyoti",
//     email: "jyoti@gmail.com",
//     age: 48,
// });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });