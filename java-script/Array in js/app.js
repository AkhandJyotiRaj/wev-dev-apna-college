// let firstname = "Akhand";
// let firstname = "jyoti";
// let firstname = "raj";

// let student = ["Akhand", "Jyoti", "Raj"];

// console.log(student[0]);

console.log("    Method in arrya  ");

let cars = ["audi", "bmw", "xuv", "maruti"];

cars.push("maruti");  // add in last index
cars.push("ferrari");
console.log(cars);

cars.pop();  // delet last index
cars.pop();
console.log(cars);

cars.unshift("toyatoa"); // add any thing in first
cars.unshift("lamborgani");
console.log(cars);

cars.shift();  // add any thing in first
cars.shift();
console.log(cars);

let followrs = ["Rand", "akhand", "jyoti"];

let blocked = followrs.shift();
console.log(followrs);
console.log(blocked);

// practice sets
let month = ["january", "july", "march", "august"];

month.shift();  // deleter from fist
month.shift();

month.unshift("june");  // add in frist
month.unshift("july");
console.log(month);

console.log("  ADD two arry with concat ");

let primary = ["red", "blue", "yellow"];
let secondary = ["pink", "gulabi", "black", "orange"];

let color = primary.concat(secondary); // add tow array
console.log(color);
console.log(color.reverse());  // reverse any arry

console.log(primary.slice());
console.log(color.slice(2));

console.log(color.slice(2, 4))
console.log(color.slice(-4))

console.log(" Splice method ");

let col = ["red", "blue", "yellow", "pink", "gulabi", "black", "orange","redd"];
console.log(col);
console.log(col.splice(4));
console.log(col);
console.log(col.splice(0, 1));
console.log(col);
col.splice(1, 0, "blue", "red");
console.log(col);

// practice question

let mon = ["january", "july", "march", "agust"];

mon.splice(0, 2, "july","june");
console.log(mon);

let lan = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

console.log(lan.reverse().indexOf("javascript"));
