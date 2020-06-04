document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //assign myNode to the submit button
  //myNode.addEventListener("submit", callbackFunction)
  //handleSubmit
  //preventDefault
  //populate the todoList with .value
  let taskForm = document.querySelector("#create-task-form");
  taskForm.addEventListener("submit", handleSubmit)

  function handleSubmit(e) {
      e.preventDefault();
      // console.log(e.target)
      // console.log(e)

      let task = document.querySelector("#new-task-description").value;
      let deadline = document.querySelector("#new-task-deadline").value;
      // console.log(task)
      writeTasktoDOM(task, deadline)
  }

  function writeTasktoDOM(task, deadline) {
      let text = `${task}: ${deadline}`
      let listElement = document.createElement("li")
      listElement.innerText = text
      let entireList = document.querySelector("#tasks")
      entireList.appendChild(listElement)
  }



});
