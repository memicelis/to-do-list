const addButton = document.querySelector('.add-button');
const taskDescription = document.querySelector('.task-data');
const toDoList = document.getElementById('todo-list');

let listData = [];

// DISPLAY TASKS

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

// ADD TASK

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

// DELETE TASK

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

// EDIT TASK

const updateTaskDescription = (index, newDescription) => {
  const taskToUpdate = listData.find((task) => task.index === index);
  if (taskToUpdate) {
    taskToUpdate.description = newDescription;
    localStorage.setItem('tasksData', JSON.stringify(listData));
  }
};

toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task-description')) {
    const descriptionElement = e.target;

    descriptionElement.addEventListener('blur', () => {
      const newDescription = descriptionElement.value;
      const listItem = descriptionElement.closest('li');
      const taskIndex = parseInt(
        listItem.querySelector('.delete-icon').getAttribute('data-index'),
        10,
      );
      updateTaskDescription(taskIndex, newDescription);
    });
  }
});
