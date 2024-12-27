// let arr = [1, 2, 3, 4, 5, 6];

// let print = function (ele) {
//     console.log(ele);
// }

// let pri = (ele) => {
//     console.log(ele);
// }
// arr.forEach(print);
// console.log(" ")
// arr.forEach(pri)

// console.log(" ")
// arr.forEach((ele) => {
//     console.log(ele)
// })

console.log("  forEach mehtod in array function ")

// let arr = [{
//     name: "Name",
//     marks: "   Marks"
// },{
//     name: "akhand",
//     marks: 45
// }, {
//     name: "mc hai ",
//     marks: 100
// }, {
//     name: "kuttti rand",
//     marks: 200
//     }];

// arr.forEach((ele) => {
//     console.log(ele.name, ele.marks+);
// })

console.log("  map ** mehtod in array function ");

// let num = [1, 2, 3, 4, 5, 6];

// let double = num.map((ele) => {
//     return ele%2 == 0;
// })

// console.log(double);

console.log("  FILTTER FUNCTION IN ARRAY FUNCTION ");

// let arr = [1, 2, 3, 4, 5, 6, 7, 2, 43, 33, 44];

// let ans = arr.filter((ele) => {
//     return ele % 2 == 0;
// })
// console.log(ans);

console.log("  reduce function in array function ");

// let arr = [1, 2, 3, 4,5];

// let finalvalue = arr.reduce((res, ele) => { return res + ele });

console.log("  FIND MAXIMUM IN THIS GIVEN ARRAY WITH USEING REDUCE METHOD IN ARRAY ");

// let arr = [1, 2, 3, 22, 3, 22, 3, 32, 2,];

// let max = -1;

// for (let i = 0; i <= arr.length; i++){
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let max = arr.reduce((max, ele) => {
//     if (ele > max ) {
//         return ele;
//     } else {
//         return max;
//     }
// })
// console.log(max);

console.log("   practice question 1 and 2");

// let arr = [10, 20, 30, 40];

// let right = arr.every((ele) => (ele % 10 == 0));
// console.log(right);

// let arr = [1, 3, 2, 4, 5, 3, 22, 3, 5];

// let min = arr.reduce((min, ele) => {
//     if (min > ele) {
//         return ele;
//     } else {
//         return min;
//     }
// });
// console.log(min);

console.log(" DEAFAULT VALUE IN FUNCTIONS ");

// function sum(a, b = 4) {
//     return a + b;
// }
// console.log(sum(2));

console.log("  ...arr  SPREAD IN JAVASCRIPT FUNCTION MEHTOD");

// let arr = [2, 3, 2, 2, 3, 4, 3, 4, 5, 3, 2, 55, 8];
// // console.log(Math.min(...arr));
// console.log(..."apna college")
// console.log(...arr);

console.log("   SPREAD IN ARRAY LITERALS");

// let arr = [1, 2, 3, 4, 5];
// let newarr = [...arr];
// console.log(newarr);

// let char = [..."hellow"];
// console.log(char);

// let even = [2, 4, 6, 8];
// let odd = [1, 3, 5, 7, 9];
// let oddeven = [...odd, ...even];
// console.log(oddeven);

console.log("     SPREAD IN OBJECT LITERALS ");

// const data = {
//     email: "akhandjyotiraj@gmail.com",
//     pass: "Akhand"
// };

// const display = {...data , id:123,country: "India "}

// let arr = [1, 2, 3, 4, 5];

// let obj1 = { ...arr };
// console.log(obj1);

console.log("   REst in javascirpt he is multiple vlaue ko store karta hai apne andar");

// function sum(...args) {
//     for (let i = 0; i < args.length; i++){
//         console.log("your input us : ", args[i]);
//     }
// };

// function min() {
//     console.logmethod(arguments);
//     console.log(arguments.length);
//     console.log("hello wrodl");
// }


// function sum(...args) {
//     console.log("Your sum is : ")
//     return args.reduce((sum, ele) => sum + ele);
// }


console.log("        DESTERUCTURING IN  arrau amd OBJECTS ");

let names = ["rahul", "abdul", "beta", "bauna","kutta","rand"];

let [winner, muslim, chikna, ...chotu] = names;

let student = {
    name: "akhand",
    roll: 45,
    sub: ["hindi", "english", "math"],
    username: "akhand",
    pass: "1234@"
}

let { username, pass } = student;
let { username: user, pass: password } = student;
