const todoList = [];

renderTodoList();

function addTodo(){
    let inputValue = document.querySelector('.js-inputBox').value;

    todoList.push(inputValue);

    renderTodoList();

    document.querySelector('.js-inputBox').value = '';
}

function renderTodoList(){
    
    let todoListHTML = '';
    for(let i=0; i<todoList.length; i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;

        todoListHTML += html;
    }
    document.querySelector('.js-tasks').innerHTML = todoListHTML;
}

function handleTodokeydown(event){
    if(event.key === 'Enter'){
        addTodo();
    }
}