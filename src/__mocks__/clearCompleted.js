import displayTasks from './display.js';

const clearAllCompleted = () => {
  const toDoList = document.getElementById('todo-list');
  let tasksLocalStorage = JSON.parse(localStorage.getItem('tasksData')) || [];
  tasksLocalStorage = tasksLocalStorage.filter(
    (task) => task.completed === false,
  );
  tasksLocalStorage.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasksData', JSON.stringify(tasksLocalStorage));
  toDoList.innerHTML = '';
  displayTasks();
};

export default clearAllCompleted;
