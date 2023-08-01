let newTaskInput
let errorInfo
let addNewTaskButton
let taskList

function main() {
    prepareDOMElements();
    prepareDOMEvents();
}

function prepareDOMElements(){
    document.querySelector(".new-task__input-field")
    document.querySelector(".new-task__add-button")
    document.querySelector("ul.task-list")

}

function prepareDOMEvents(){

}

document.addEventListener("DOMContentLoaded", main)

