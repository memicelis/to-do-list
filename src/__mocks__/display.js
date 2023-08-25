const displayTasks = () => {
  let listData = [];
  const toDoList = document.getElementById('todo-list');
  listData = JSON.parse(localStorage.getItem('tasksData')) || [];
  const sortedListData = listData.slice().sort((a, b) => a.index - b.index);
  sortedListData.forEach((list) => {
    const data = document.createElement('li');
    data.innerHTML = `<input type="checkbox" class="task" data-index="${
      list.index
    }" ${list.completed ? 'checked' : ''}>
        <input type="text" class="task-description" value="${
  list.description
}"></input><span class="delete-icon" data-index="${
  list.index
}">&#128465;</span>`;
    toDoList.appendChild(data);
  });
};
export default displayTasks;
