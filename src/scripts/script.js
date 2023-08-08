let newTaskInput;
let errorInfo;
let addNewTaskButton;
let taskList;
let taskItem;
let removeTaskButton;
let themeChangeButton;
let appContainer;
let appHeader;
let bodyBackground;
let taskControlButtons;
let taskParagraphs;
let taskListHeader;
let taskItemDone;
let newTaskForm;
let newTask;
const controlsContainer = `<ul class="task-controls">
<li class="task-controls__item">
  <button class="task-button--done">
    <svg width="30px" height="30px">
      <use href="./assets/icons/icons-sprite.svg#icon-done"></use>
    </svg>
  </button>
</li>
<li class="task-controls__item">
  <button class="task-button--edit">
    <svg width="28px" height="28px">
      <use href="./assets/icons/icons-sprite.svg#icon-text-edit"></use>
    </svg>
  </button>
</li>
<li class="task-controls__item">
  <button class="task-button--delete">
    <svg width="24px" height="24px">
      <use href="./assets/icons/icons-sprite.svg#icon-delete"></use>
    </svg>
  </button>
</li>
</ul>`;

function formSubmitPrevent(event) {
  event.preventDefault();
}

function prepareDOMElements() {
  bodyBackground = document.querySelector('.light-theme');
  appContainer = document.querySelector('.app-container');
  appHeader = document.querySelector('.header-container');
  newTaskForm = document.querySelector('.new-task-container');
  newTaskInput = document.querySelector('.new-task__input-field');
  addNewTaskButton = document.querySelector('.new-task__add-button');
  taskList = document.querySelector('.task-list');
  taskItem = document.querySelector('.task-list__item');
  taskItemDone = document.querySelector('.task-list__item--done');
  removeTaskButton = document.querySelector('.task-done-buton');
  themeChangeButton = document.querySelector('.theme-switch-button');
  taskControlButtons = document.querySelectorAll('[class*="task-button"]');
  taskParagraphs = document.querySelectorAll('[class*="task-paragraph"]');
  taskListHeader = document.querySelector('.task-list-header');
}

function prepareDOMEvents() {
  themeChangeButton.addEventListener('click', themeChange);
  newTaskForm.addEventListener('submit', formSubmitPrevent);
  addNewTaskButton.addEventListener('click', createNewTask);
}
function addControls() {
  newTask.insertAdjacentHTML('beforeend', controlsContainer);
}
function createNewTask() {
  if (newTaskInput.value !== '') {
    newTask = document.createElement('li');
    newTask.classList.add('task-list__item');
    const newTaskParagraph = document.createElement('p');
    newTaskParagraph.classList.add('task-paragraph');
    newTaskParagraph.textContent = newTaskInput.value;
    newTask.append(newTaskParagraph);
    newTaskInput.value = '';
    taskList.prepend(newTask);
    addControls();
  } else {
    console.log('ERROR');
  }
}

function themeChange() {
  prepareDOMElements()
  bodyBackground.classList.toggle('dark-theme');
  appContainer.classList.toggle(`app-container--dark-theme`);
  appHeader.classList.toggle('header-container--dark-theme');
  newTaskForm.classList.toggle('new-task-container--dark-theme');
  newTaskInput.classList.toggle('new-task__input-field--dark-theme');
  taskItem.classList.toggle('task-list__item--dark-theme');
  taskListHeader.classList.toggle('dark-theme-text');
  taskItemDone.classList.toggle('task-list__item--done--dark-theme');
  taskControlButtons.forEach(button => {
    button.classList.toggle('task-button--dark-theme');
  });
  taskParagraphs.forEach(paragraph => {
    paragraph.classList.toggle('dark-theme-text');
  });
}
function main() {
  prepareDOMElements();
  prepareDOMEvents();
}
main();
