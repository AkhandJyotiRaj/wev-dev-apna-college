console.log(" Whiel loops in js");

// let n = 1;

// while (n <= 5) {
//     console.log(n);
//     n++;
// }

console.log("  Guess fav movie ");

// let fav = "avatar";
// let guess = prompt("Guess your movie Name :  ");

// while ((guess != fav ) && (guess != "quit")) {
//     guess = prompt("Wrong guess : Try again : ");
// }
// if (guess == fav) {
//     console.log("Congrats!! Fav is Avatar");
// }
// else {
//     console.log("You are quit the game");
// }

console.log("Brak key use");

// let n = 1;

// while (n <= 5) {
//     if (n == 3) {
//         break;
//     }
//     console.log(n);
//     n++
// }
// console.log("We use break")

console.log(" Loops in array use");
// let fruit = ["mango", "apple", "orange", "papaya", "banana", "pineapple"];

// for (let i = 0; i <= fruit.length-1; i++){
//     console.log(i,fruit[i]);
// }

console.log(" Nested loops in array");

// let fruit = [["mango", "apple", "orange"], ["papaya", "banana", "pineapple"]];

// for (let i = 0; i <= fruit.length-1; i++){
//     for (let j = 0; j <= fruit[i].length-1; j++){
//         console.log(fruit[i][j]);
//     }
// }

// for (let i = 0; i <= fruit.length-1; i++){
//     console.log(i,fruit[i]);
// }

console.log("Enter for of loops")

// let fruits = ["mango", "apple", "orange", "papaya", "banana", "pineapple"];

// for (i of fruits) {
//     console.log(i);
// }

// for (char of "Akhand Jyoti Raj") {
//     console.log(char);
// }

console.log(" for of loops in nested loops");

let fruits = [["mango", "apple", "orange"], ["papaya", "banana", "pineapple"]];

for (fruit of fruits) {
    for (name of fruit) {
        console.log(name);
    }
}