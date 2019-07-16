document.getElementById('add').addEventListener('click', function(){
    let value = document.getElementById('new-task').value;
    if(value) addItemTodo(value);
})

function addItemTodo(text) {
    let list = document.getElementById('task-list');

    let item = document.createElement('li');
    item.innerText = text;

    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerText = "Delete";

    item.appendChild(checkBox);
    item.appendChild(remove);

    list.appendChild(item);
}

// document.getElementById('add').addEventListener('click', function(){
//     let value = document.getElementById('item').value;
//     if (value){
       
//     }
// })