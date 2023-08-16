const addButton = document.querySelector('.add-button');
const taskDescription = document.querySelector('.task-data');
const toDoList = document.getElementById('todo-list');

let listData = [];

const displayTasks = () => {
  listData = JSON.parse(localStorage.getItem('tasksData')) || [];
  const sortedListData = listData.slice().sort((a, b) => a.index - b.index);
  sortedListData.forEach((list) => {
    const data = document.createElement('li');
    data.innerHTML = `<input type="checkbox" class="task" ${
      list.completed ? 'checked' : ''
    }>
      <input type="text" class="task-description" value="${
  list.description
}"></input><span class="delete-icon" data-index="${
  list.index
}">&#128465;</span>`;
    toDoList.appendChild(data);
  });
};

displayTasks();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (taskDescription.value === '') return;

  listData = JSON.parse(localStorage.getItem('tasksData')) || [];
  const task = {
    description: taskDescription.value,
    index: listData.length + 1,
    completed: false,
  };
  listData.push(task);
  localStorage.setItem('tasksData', JSON.stringify(listData));
  taskDescription.value = '';
  toDoList.innerHTML = '';
  displayTasks();
});

const remove = (index) => {
  listData = listData.filter((task) => task.index !== index);

  // Adjusting indexes after deletion
  listData.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasksData', JSON.stringify(listData));
  toDoList.innerHTML = '';
  displayTasks();
};

toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-icon')) {
    const indexToDelete = parseInt(e.target.getAttribute('data-index'), 10);
    remove(indexToDelete);
  }
});
