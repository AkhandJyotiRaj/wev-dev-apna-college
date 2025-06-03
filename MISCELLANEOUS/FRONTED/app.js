// function Person(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         }
//     }
//     return person;
// }


// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     Person.prototype.talk = function () {
//         console.log(`hi my name is = ${this.name} and i am ${this.age} years old`)
//     }
// }

// let p1 = new Person("John", 20);
// let p2 = new Person("Jane", 21);

// p1.talk();
// p2.talk();


// class Person{
//     constructor(name, age) {
//         this.nmae = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`hi my name is = ${this.name} and i am ${this.age} years old`)
//     }
// }

// let p1 = new Person("John", 20);
// let p2 = new Person("jhutu log ",30);

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hi my name is = ${this.name} and i am ${this.age} years old`)
    }
    
}

class Student extends Person{
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
    
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    
}

let s1 = new Student("akhand", 20, 100);
let t1 = new Teacher("akhand", 20, "math");
