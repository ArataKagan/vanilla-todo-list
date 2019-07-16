document.getElementById('add').addEventListener('click', function(){
    let value = document.getElementById('new-task').value;
    if(value) addItemTodo(value);
    document.getElementById('new-task').value = "";
})

function removeItem(){
   let item = this.parentNode;
   let list = item.parentNode;
   list.removeChild(item);
}

function addItemTodo(text) {
    let list = document.getElementById('task-list');

    let item = document.createElement('li');
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    let label = document.createElement('label');
    label.innerText = text;
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerText = "Delete";

    remove.addEventListener('click', removeItem);

    item.appendChild(checkBox);
    item.appendChild(label);
    item.appendChild(remove);

    list.insertBefore(item, list.childNodes[0]);
}

for(let i=0; document.getElementsByClassName("delete").length > i; i++){
    document.getElementsByClassName("delete")[i].addEventListener('click', removeItem);
}

