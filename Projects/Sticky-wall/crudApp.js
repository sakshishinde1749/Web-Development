const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function addTodo(){
    const nameInputElement = document.querySelector('.js-inputBox');
    const name = nameInputElement.value;

    const duedateInputElement = document.querySelector('.js-dueDate');
    const dueDate = duedateInputElement.value;

    todoList.push({
        // name : name,
        // dueDate : dueDate
        name,
        dueDate
    })

    saveToLocalstorage();
    renderTodoList();

    document.querySelector('.js-inputBox').value = '';
}

function renderTodoList(){
    
    let todoListHTML = '';
    for(let i=0; i<todoList.length; i++){

        const todoObject = todoList[i];

        const html = `
            <div class="todo-name">${todoObject.name}</div>

            <div class="todo-dueDate">${todoObject.dueDate}</div>

            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
                saveToLocalstorage();
            " class="deleteButton">Delete</button>

        `;

        todoListHTML += html;
    }
    document.querySelector('.js-tasks').innerHTML = todoListHTML;
}

function handleTodokeydown(event){
    if(event.key === 'Enter'){
        addTodo();
    }
}

function saveToLocalstorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}