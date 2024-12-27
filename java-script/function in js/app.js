// function hello( a) {
//     console.log(a);
// }
// // let a = 5;
// hello(5);
// hello(6);
// hello(5)


// function printPoem() {
//     console.log("Twinkel Twinkle, little Star");
//     console.log("How I wonder what you are");
// }

// printPoem();

console.log("    Print info   ");

// function printinfo(name, age) {
//     console.log(`${name} 's age is ${age} year`);
// }

// printinfo("Akhand", 19);
// printinfo("Abdul", 23);

console.log("     AVERAGE OF THREE NUMBER ");

// function avg(a, b, c) {
//     console.log("Aveg is : ", (a + b + c) / 3);
// }

// avg(5,5,5)

console.log("    ADD ARRAI INPUT STRING  ");

// let str;

// function addString(arr) {
    
//     for (let i = 0; i < arr.length; i++){
//         str  += arr[i];
//     }
//     console.log(str);
// }

// addString([" akhand ", "jyoti ", "raj "]);


console.log("   Function with argument ");

// let sum = function (a, b) {
//     return a + b;
// }

// let helloo = function (a) {
//     for (char of a ){
//         console.log(char);
//     }
// }

console.log(" HIgher order Functions");

// let greet = function () {
//     console.log("Hello")
// }
// function multiplegreet(pri, n) {
//     for (let i = 0; i < n; i++){
//         pri();
//     }
// }
// multiplegreet(greet , 5)

console.log("  HIgher order function return");

// function oddevenfactory(request) {
//     if (request == "odd") {
//         return function (n) {
//             console.log(!(n % 2 == 0));
//         }
//     } else if (request == "even") {
//         return function (n) {
//             console.log(n % 2 == 0);
//         }
//     } else {
//         console.log("Enter worong request ")
//     }
// }

// let request = "even"

console.log("   Mehtod in functions in ");

const calculator = {
    add(a, b) {
        return a + b;
    },
    sub (a, b) {
        return a - b;
    },
    mul (a, b) {
        return a * b;
    }
};
