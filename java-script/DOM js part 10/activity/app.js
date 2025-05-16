// let p = document.querySelector("p");

// p.addEventListener("click", function () {
//     console.log("you are clicke this para graphc")
    
// })
// let div = document.querySelector("div");

//     div.addEventListener("mouseenter", function () {
//         console.log("You are enter this box");
//     })
// let p = document.querySelector("p");

// p.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// keyboard listeners ?

// let input = document.querySelector("input");

// input.addEventListener("keydown", function (event) {
//     console.log(event.key);
//     console.log(event.code)
// })

// let form = document.querySelector("form");

// form.addEventListener("submit", function () {
//     alert("redirect to youtube ");
// })

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let inp = document.querySelector("input");
    
    console.dir(inp);
    console.log(inp.value )
})