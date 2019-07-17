let addButton = document.getElementById('add');
let newTask = document.getElementById('new-task');
let list = document.getElementById('task-list');
let deleteButton = document.getElementsByClassName("delete");
let checkBox = document.getElementsByClassName("checkbox");
let selectAllButton = document.getElementById('select-all');
let incompletedButton = document.getElementById('incompleted');
let completedButton = document.getElementById('completed');

addButton.addEventListener('click', function(){
    let value = newTask.value;
    if(value) addItem(value);
    newTask.value = "";
})

function removeItem(){
   let item = this.parentNode;
   let list = item.parentNode;
   list.removeChild(item);
}

function addItem(text) {
    let item = document.createElement('li');

    //checkbox
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    checkBox.addEventListener('click', checkEvent);

    //label
    let label = document.createElement('label');
    label.innerText = text;

    //delete
    let removeButton = document.createElement('button');
    removeButton.classList.add('delete');
    removeButton.innerText = "Delete";
    removeButton.addEventListener('click', removeItem);

    item.appendChild(checkBox);
    item.appendChild(label);
    item.appendChild(removeButton);
    item.classList.add("unchecked");

    list.insertBefore(item, list.childNodes[0]);
}

function checkEvent(){
    let listItem = this.parentNode;
    if(listItem.className == "unchecked"){
        listItem.className = "checked";
    } else {
        listItem.className = "unchecked";
    }
}

// filter functionality
function showAll(){
    let task = document.querySelectorAll("#task-list>li");
    for(let i=0; task.length >i; i++){
        task[i].style.display = "inherit";
    }
}

function selectIncompleted(){
    let task = document.querySelectorAll("#task-list>li");
    for(let i=0; task.length > i; i++){
        if(task[i].className == "checked"){
            task[i].style.display = "none";
        } else {
            task[i].style.display = "inherit";
        }
    }
}

function selectCompleted(){
    let task = document.querySelectorAll("#task-list>li");
    for(let i=0; task.length > i; i++){
        if(task[i].className == "unchecked"){
            task[i].style.display = "none";
        } else {
            task[i].style.display = "inherit";
        }
    }
}


selectAllButton.addEventListener('click', showAll);
incompletedButton.addEventListener('click', selectIncompleted);
completedButton.addEventListener('click', selectCompleted);


for(let i=0; deleteButton.length > i; i++){
    deleteButton[i].addEventListener('click', removeItem);
}

for(let i=0; checkBox.length > i; i++){
    checkBox[i].addEventListener('click', checkEvent);
}
