document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const textInput =document.getElementById('new-task-description')
  const task = document.getElementById('tasks') 

  //preventing the default form submission behavior
  form.addEventListener('submit', function(event) {
    event.preventDefault()

    //getting the value that is entered by the user in the task description input field
    const taskDescription = textInput.value 

    // if the task description field is not empty(a task has been provided), create a new task then append it to the task list and clear the task description input field.
    if (taskDescription !== '') {
      const newTask = document.createElement('li')
      newTask.textContent = taskDescription
      task.appendChild(newTask)
      textInput.value = ''
    }
    //if the task description field is empty, alert the user to enter a task.
    else {
      alert ('Please enter a task')
    }
  })
});
