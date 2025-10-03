console.log("hHello Word!!")

let todos = [];

function addTodo(){ 
     
    ///get input values
    const TodoInput= document.getElementById("todo-input");
    const TodoDate= document.getElementById("todo-date");
    
    /// validate input
    if(validateInput(TodoInput.value, TodoDate.value)) {
        /// add new todo to the array
       let todo = {task: TodoInput.value, date: TodoDate.value,} ;
        console.log(todo);

        /// render teh update todo list
        renderTodo();

    
    }
}

function renderTodo(){ 
    ///Get thetodo 
    const todoList = document.getElementById("todo-list");
    
    /// Clear existing list
    todoList.innerHTML = '';

    /// Render each todo list
    todos.forEach((todo, index) =>{
        todoList.innerHTML = "";
    if(todoList.length === 0){
        todoList.innerHTML =`<p class=" text-center text-gray-500">No todos yet. Add one above!</p>`;
        return;
    }

    });

       
}

function deletAllTodo(){ 
    /// Clear the todos array
    todos = [];

    /// render the empty todo list
    renderTodo();   
}

function filterTodo(){ }

/// validate input
function validateInput(todo, date){
    ///check if fields are empty
    if(todo === '' || date === ''){
        ///show an alert if validation fails
        alert("please fill in all fields");
        return false;
    }

    ///input is valid
    return true;
}