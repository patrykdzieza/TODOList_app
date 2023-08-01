let newTaskInput;
let errorInfo;
let addNewTaskButton;
let taskList;
let task;
let removeTaskButton;
function main() {
  prepareDOMElements();
  prepareDOMEvents();
}

function prepareDOMElements() {
  document.querySelector('.new-task__input-field');
  addNewTaskButton = document.querySelector('.new-task__add-button');
  document.querySelector('ul.task-list');
  task = document.querySelector('.task-list__item--done');
  removeTaskButton = document.querySelector('.task-done-icon');
}

function prepareDOMEvents() {}

function hidding() {
  task.classList.toggle('hidden');
}

// removeTaskButton.addEventListener("click", hidding)
document.addEventListener('DOMContentLoaded', main);
