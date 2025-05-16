let btns = document.querySelectorAll("button");

for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function () {
        console.log("you click double clicked");
    })
}

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Apna College");
}