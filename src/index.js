import './style.css';

const listData = [
  {
    index: 0,
    description: 'wash the dishes',
    completed: true,
  },
  {
    index: 1,
    description: 'go to the grocery shop',
    completed: false,
  },
  {
    index: 2,
    description: 'pay the bills',
    completed: true,
  },
];

const listTask = () => {
  const toDoList = document.getElementById('todo-list');
  const sortedListData = listData.slice().sort((a, b) => a.index - b.index);
  sortedListData.forEach((list) => {
    const data = document.createElement('li');
    data.innerHTML = `<input type="checkbox" ${list.completed ? 'checked' : ''}>
    <p>${list.description}</p>`;
    toDoList.appendChild(data);
  });
  const buttonList = document.createElement('li');
  buttonList.innerHTML = '<button>Clear all completed</button>';
  toDoList.appendChild(buttonList);
};

listTask();
