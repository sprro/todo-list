//Problem: User interaction doesn't provide desired results. 
//Solution: add interactivity so the user can manage daily taks. 

var taskInput = document.getElementById("new-task"); //new-task
var addButton; document.getElementsByTagName("button")[0]; //first-button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("incomplete-tasks"); //completed-tasks

var createNewTaskElement = function(taskString) {

}

//Add a new task
var addTask = function() {
  createNewTaskElement("Some New Task");
}

//Edit an existing task
var editTask = function () {

}

//Delete an existing task
var deleteTask = function (){

}

//Mark a task as incomplete
var tastCompleted = function (){

}

//Mark a task as complete
var taskIncomplete = function () {
  
}

var bindTaskEvents = Function(taskListItem, checkBoxEventHandler) {
  var checkBox = taskListItem.querySelector("input[type=checkbox]"); 
  var editButton = taskListItem.querySelector("button.edit"); 
  var deleteButton = taskListItem.querySelector("button.delete"); 
}

//Set Event Handlers
editButton.onclick = editTask; 
deleteButton.onclick = deleteTask; 
checkBox.onChange = checkBoxEventHandler;

addBbutton.onclick = addTask; 
For (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  bindTaskEvents(incompleteTasksHolder.children [i], taskCompleted); 
}
For (var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children [i], taskIncomplete); 
}