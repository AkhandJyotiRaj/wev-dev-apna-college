// const student = {
//     name: "akhand",
//     age: 19,
//     marks : 100
// }


console.log(" Creater a psot ");

// const post = {
//     username : "@akhandjyotiraj",
//     content : "This is fav post",
//     likes: 67,
//     reposts: 0,
//     tags : ["@akhandjyotiraj"]
// }
// console.log(post.username)

console.log("  Add and upadter in object literals");

// let student = {
//     name: "Akhand jyoti raj",
//     aga: 19,
//     marks: 90,
//     city : "Delhi"

// }

console.log("Nested loop in objects ");

// const classInfo =  {
//     aman: {
//         grade: "A+",
//         city : "Lund"
//     },
//     akhand: {
//         grade: "A+++",
//         city : "Bihar"
//     },
//     abdul: {
//         grade: "A",
//         city:"Land pur"
//     },
//     bauna: {
//         grade: "P",
//         city: "Jhatt pur"

//     }
// };

console.log("nested array in objects literal");

// const classInfo = [
//     {
//         name: "aman",
//         grade : 2
//     },
//     {
//         name: "Akhand",
//         grade:"outstanding"
//     },
//     {
//         name: "beta",
//         grade:"A++"
//     }
// ];

console.log("  Math function ");

// let setp1 = Math.floor(  Math.random() *5) +20;

// console.log(setp1);

console.log("Guessing game number");

let max = prompt("Enter your max number");
let MaxNum = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter your gassing number");




while ((guess != MaxNum) && (guess != "quit")) {
    
    
    if (guess == "quit" ) {
        console.log("Your are quitting the game");
        break;
    }
    else {
        guess = prompt("Enter again your guess number");
    }
}

if (guess == "MaxNum") {
    console.log("You are won the game congrats ! ", guess);
}

