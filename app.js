const bdy = document.querySelector('body');
//creating element SECTION A
const frm = document.createElement('form'); //form
bdy.appendChild(frm);

const inp = document.createElement('input'); //input
inp.classList.add('todo-input');
inp.setAttribute('type', 'text');
frm.appendChild(inp);

const btn = document.createElement('button'); //button
btn.classList.add('todo-button');
const btnText = document.createTextNode('ADD MORE');
btn.appendChild(btnText);
frm.appendChild(btn);

//creating element SECTION B
const div1 = document.createElement('div'); //div1
div1.classList.add('todo-container');
bdy.appendChild(div1);

const ul = document.createElement('ul'); //ul
ul.classList.add('todo-list');
div1.appendChild(ul);

/* ------------ code ----------------*/
//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleting);
//function
function addTodo(event) {
  //prevent from submitting
  event.preventDefault();
  //todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //create button trash
  const trashButton = document.createElement('button');
  trashButton.classList.add('complete-btn');
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);
  //clear todo value
  todoInput.value = '';
}

function deleting(e) {
  const item = e.target;
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.remove();
  }
}
