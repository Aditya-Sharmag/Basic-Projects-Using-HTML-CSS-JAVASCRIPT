let ToDoList = [
  {
    item: "",
    dueDate: "",
  },
];
displayTask();

function addToDo() {
  let inputTask = document.querySelector(".task-input");
  let inputDate = document.querySelector(".date-input");
  let task = inputTask.value;
  let date = inputDate.value;
  ToDoList.push({ item: task, dueDate: date });
  inputTask.value = "";
  inputDate.value = "";
  displayTask();
}

function displayTask() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < ToDoList.length; i++) {
    let { item, dueDate } = ToDoList[i]; // Destructuring
    newHtml += `
    <span>${item}</span>  
    <span>${dueDate}</span>  
    <button class="delete-button" onclick="ToDoList.splice(${i},1);
    displayTask();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
