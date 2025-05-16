let btn = document.querySelector('button');

let ul = document.querySelector('ul');

let inp = document.querySelector('input');

btn.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerText = inp.value;
    

    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    delBtn.addEventListener('click', function () {
        console.log("button clicked")
        this.remove();
        ul.removeChild(item);
    });

    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value = '';
});

// sfdsadf
 
