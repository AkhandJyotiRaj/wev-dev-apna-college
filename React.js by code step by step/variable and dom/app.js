function getname() {
    let name = document.getElementById("in").value;
    console.log(name);
    document.getElementById("heading").innerText=name
}

function setname() {
    let valuee = "ye value aa jayega";
    document.getElementById("in").value = valuee;
}

function removevalue() {
    document.getElementById("in").value = "";
    document.getElementById("heading").innerText="";
}

function copyvalue() {
    let copy = document.getElementById("in").value;
    document.getElementById("in2").value = copy;
}
