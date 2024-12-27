console.log("  USING THIS WORKD MEHTOD.THIS");

// const student = {
//     name: "Akhand",
//     age: 45,

//     eng: 44,
//     math: 45,
//     pps: 50,
//     getave() {
//         console.log(this)
//         let avg = (this.eng + this.math + this.pps) / 3;
//         console.log(avg);
//     }
// }

console.log("  TRY AND CATCH SYNTAX");

// console.log("There is no any type of erroe here ")
// console.log("There is no any type of erroe here ")
// console.log("There is no any type of erroe here ")
// let a =5
// try {
//     console.log(a);
// } catch(err) {
//     // console.log("There is error");
//     console.log(err)
// }

// console.log("There is no any type of erroe here ")
// console.log("There is no any type of erroe here ")
// console.log("There is no any type of erroe here ")
// console.log("There is no any type of erroe here ")

console.log("  => ARROW FUNCTION IN JS");

// const sum = (a, b) => {
//     return a + b;
// };

// const cube = (a) => {
//     return a * a * a;
// };
// const pow = (a, b) => {
//     return a ** b;
// }

console.log(" more compacto of arrow function   ");

// const mul = (a, b) => (a * b);

console.log("Set time out in funciton");


// setTimeout  (fun =(a,b) => {
//     console.log(a+b);
// }, 4000);

console.log("   SET INTERVAL");

// let id = setInterval(() => {
//     console.log("hello boobies")
// }, 2000);

console.log("   This arrow with function scope ");




// const student = {
//     name: "Akkhand",
//     roll: 45,
//     akhand: this,
//     getname: function () {
//         return this.name
//     },
//     getroll: () => {
//         return this;
//     },
//     getinfo1: function () {
//         setTimeout(() => {
//             console.log(this)  // student ye khud ka nahi dekhta hai
//         }, 2000);
//     },
//     getinfo2: function () {
//         setTimeout(function () {
//             console.log(this) /// window hoga
//         }, 2000);
//     },
//     getinfo3: function () {
//         function akhandd() {
//             console.log(this);  /// window hoga
//         }
//         akhandd();
//     }

// };


console.log("   PRACTICE QUESTION  1 ,2 ");
// let n = 5;
let square = n => (n ** 2);
// console.log(square(n))

let id = setInterval(() => {
    console.log("Hellow world ");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval in 10 s")
},11000)