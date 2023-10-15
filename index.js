document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("create-task-form");
    const taskInput = document.getElementById("new-task-description");
    const taskList = document.getElementById("tasks");
  
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission
  
      const taskText = taskInput.value;
      if (taskText.trim() !== "") {
        // Create a new list item for the task
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
  
        // Add the task to the task list
        taskList.appendChild(taskItem);
  
        // Clear the input field
        taskInput.value = "";
      }
    });
  });
  