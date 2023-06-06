const todoList = [];

function addTodo(){
    let inputValue = document.querySelector('.js-inputBox').value;

    todoList.push(inputValue);
    console.log(todoList);

    document.querySelector('.js-inputBox').value = ' ';
}

function handleInput(event){
    if(event.key === 'Enter'){
        addTodo();
    }
}
