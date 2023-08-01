let newTaskInput;
let errorInfo;
let addNewTaskButton;
let taskList;
let taskItem;
let removeTaskButton;
function main() {
  prepareDOMElements();
  prepareDOMEvents();
}

function prepareDOMElements() {
  newTaskInput = document.querySelector('.new-task__input-field');
  addNewTaskButton = document.querySelector('.new-task__add-button');
  taskList = document.querySelector('ul.task-list');
  task = document.querySelector('.task-list__item');
  removeTaskButton = document.querySelector('.task-done-buton');
}

function prepareDOMEvents() {}

function hidding() {
  task.classList.toggle('hidden');
}

// removeTaskButton.addEventListener("click", hidding)
document.addEventListener('DOMContentLoaded', main);
console.log(removeTaskButton);