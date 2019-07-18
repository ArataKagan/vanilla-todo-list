let addButton = document.getElementById('add');
let newTask = document.getElementById('new-task');
let list = document.getElementById('task-list');
let deleteButton = document.getElementsByClassName("outer-delete");
let checkBox = document.getElementsByClassName("checkbox");
let selectAllButton = document.getElementById('select-all');
let incompletedButton = document.getElementById('incompleted');
let completedButton = document.getElementById('completed');

let removeSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59 59" style="enable-background:new 0 0 59 59;" xml:space="preserve"> <g> <path class="fill" d="M29.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C28.5,50.553,28.948,51,29.5,51z"/> <path class="fill" d="M19.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C18.5,50.553,18.948,51,19.5,51z"/> <path class="fill" d="M39.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C38.5,50.553,38.948,51,39.5,51z"/> <path class="fill" d="M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289 C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h2.041l1.915,46.021C10.493,55.743,11.565,59,15.364,59 h28.272c3.799,0,4.871-3.257,4.907-4.958L50.459,8H52.5c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M21.792,2.681 C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681c0.805,0.823,1.128,2.271,1.24,3.319H20.553 C20.665,4.952,20.988,3.504,21.792,2.681z M46.544,53.979C46.538,54.288,46.4,57,43.636,57H15.364 c-2.734,0-2.898-2.717-2.909-3.042L10.542,8h37.915L46.544,53.979z"/> </g> </svg>';


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
    let checkboxLabel = document.createElement("label");
    let checkBox = document.createElement('input');
    let customeCheckbox = document.createElement("span");
    checkboxLabel.classList.add("checkbox-container");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    customeCheckbox.classList.add("custom-checkbox");

    customeCheckbox.addEventListener('click', checkEvent);

    //label
    let label = document.createElement('label');
    label.classList.add("task-label");
    label.innerText = text;

    //delete
    let removeButton = document.createElement('button');
    let outerRemoveDiv = document.createElement('div');
    outerRemoveDiv.classList.add('outer-delete');  
    removeButton.classList.add('delete');
    removeButton.innerHTML = removeSVG;
    outerRemoveDiv.addEventListener('click', removeItem);

    outerRemoveDiv.appendChild(removeButton);

    checkboxLabel.appendChild(checkBox);
    checkboxLabel.appendChild(customeCheckbox);
    
    item.appendChild(checkboxLabel);
    item.appendChild(label);
    item.appendChild(outerRemoveDiv);
    item.classList.add("unchecked");

    list.insertBefore(item, list.childNodes[0]);
}

function checkEvent(){
    let listItem = this.parentNode.parentNode;
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
