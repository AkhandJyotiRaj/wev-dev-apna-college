console.log("Enter to do list");

let todo = [];
let req = prompt("Enter your request : ");

while (true) {
    if (req == "quit") {
        console.log("  ");
        console.log("Quitting the application of to do list");
        break;
    }

    if (req == "list") {
        console.log("-------------");
        for (let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------");
    }

    else if (req == "add") {
        let task = prompt("Enter the task as you want to add : ");
        todo.push(task);
    }
    else if (req == "delete") {
        let ind = prompt("Enter the task as delete");
        todo.splice(ind,1)
    }
    else {
        console.log("wrong request")
    }
    req = prompt("Enter your request : ")
}