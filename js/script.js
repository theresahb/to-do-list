const form = document.querySelector('.form')
let lists = document.querySelector('.list');
let newInput = document.getElementById("input");
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))

const data = JSON.parse(localStorage.getItem('items'))

const listMaker = text => {
    let newTask = document.createElement("li");
    newTask.textContent = text;
    lists.prepend(newTask);

    let delBtn = document.createElement("button");
    delBtn.innerHTML = `<img src="images/delete.png" alt="" class="del">`;
    newTask.appendChild(delBtn);

    delBtn.setAttribute("onclick", "remove()")
    delBtn.setAttribute('class', 'del-btn');
}



function add(event) {
    event.preventDefault();

    if (newInput.value === '') {
        return alert('Please add a list')
    }

    itemsArray.push(newInput.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    listMaker(newInput.value);
    document.getElementById("input").value = "";
}

form.addEventListener('submit', add)

data.forEach(item => {
    listMaker(item)
})

function remove() {
    let deleteTask = this.event.currentTarget.parentNode;
    lists.removeChild(deleteTask);
    let result = itemsArray.indexOf( deleteTask.textContent);
    let newlist = itemsArray.splice(result, 1);
    localStorage.setItem('items', JSON.stringify(itemsArray))
}