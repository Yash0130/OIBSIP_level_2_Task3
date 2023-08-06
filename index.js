const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('task');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="doneTask">Done</button>
      <button class="deleteTask">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteTask')) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains('doneTask')) {
    const taskText = event.target.parentElement.querySelector('span');
    taskText.classList.toggle('completed');
  }
});