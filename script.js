//Problem: User interaction doesn't provide desired results. 
//Solution: add interactivity so the user can manage daily taks. 

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first-button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

var createNewTaskElement = function(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement ("input");
  var label = document.createElement("label"); 
  var editInput = document.createElement("input"); 
  var editButton = document.createElement("button"); 
  var deleteButton = document.createElement("button");

  checkBox.type = "checkbox"; 
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit"; 
  deleteButton.innerText = "Delete"; 
  deleteButton.className = "delete"; 

  label.innerText = taskString; 

  listItem.appendChild(checkBox); 
  listItem.appendChild(label); 
  listItem.appendChild(editInput); 
  listItem.appendChild(editButton); 
  listItem.appendChild(deleteButton); 

  return listItem; 
}

//Add a new task
var addTask = function() {
  var listItem = createNewTaskElement(taskInput.value);
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = ""; 
}

//Edit an existing task
var editTask = function() {
  var listItem = this.parentNode; 
  var editInput = listItem.querySelector("input[type=text");
  var label = listItem.querySelector("label"); 

  var containsClass = listItem.classList.contains("editMode");

  if(containsClass) {
    label.innerText = editInput.value; 
  } else {
    editInput.value = label.innerText; 
  }

  listItem.classList.toggle("editMode"); 

}

//Delete an existing task
var deleteTask = function() {
  var listItem = this.parentNode; 
  var ul = listItem.parentNode; 
  ul.removeChild(listItem);
}

//Mark a task as incomplete
var taskCompleted = function() {
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as complete
var taskIncomplete = function() {
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete"); 


//Set Event Handlers
  //bind editTask to edit button
  editButton.onclick = editTask;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
  }

  var ajaxRequest = function() {
  }

  addButton.addEventListener("click", addTask); 
  addButton.addEventListener("click", ajaxRequest); 

  

for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted); 
}
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete); 
}