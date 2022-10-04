const btnAddTask = document.querySelector("#btnAddTask");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList"); // Creates a variable that is connect with an <ul> with id="taskList"
const infoToUser = document.querySelector("small");
const completedTasks = document.querySelector("#completedTasks");

const taskArray = [];

let count = 0;

btnAddTask.addEventListener("click", function () {
  const userValue = taskInput.value; // Fetches and assigns the value the user has entered to a variable

  if (isVariableEmpty(userValue) != true) {
    taskArray.push({
      // Creates a task object with the value provided by the user
      task: userValue,
    });

    infoToUser.innerText = ""; // No info needed for the user with correct input

    const taskItem = document.createElement("li"); // Creates an empty <li> element
    taskList.appendChild(taskItem); // Appends the newly created <li> element inside <ul>

    const taskInfo = document.createElement("span"); // Creates an empty <span> element
    taskInfo.innerText = userValue; // Inserts the value that the user has entered into the <span> element
    taskItem.appendChild(taskInfo); // Appends the <span> element with taskInfo inside the <li>

    taskInput.value = ""; // Empties input field after every succesful task is added

    // Adds an eventlistener to the taskInfo element (<span>)
    // which will trigger any time that element is clicked on.
    taskInfo.addEventListener("click", function () {
      if (taskItem.getAttribute("class") == "completed") {
        taskItem.setAttribute("class", "");
        count--;
      } else {
        taskItem.setAttribute("class", "completed");
        count++;
      }
      completedTasks.innerText = `${count} completed`;
    });

    const trashCan = document.createElement("span");
    trashCan.innerHTML = "&#x1F5D1";
    trashCan.setAttribute("class", "trashcan");
    taskItem.appendChild(trashCan);
    trashCan.addEventListener("click", function () {
        if (taskItem.getAttribute("class") == "completed") {
          count--;
        };
      RemoveObjFromArr(taskInfo.innerText);
      taskItem.remove();
      completedTasks.innerText = `${count} completed`;
    });
  } else {
    infoToUser.innerText = "Input field empty, no task was added.";
  }
});

function RemoveObjFromArr(taskToBeRemoved) {
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].task == taskToBeRemoved) {
      taskArray.splice([i], 1);
    }
  }
};

function isVariableEmpty(variable) {
  if (variable.length == 0) {
    return true;
  } else {
    false;
  }
};
