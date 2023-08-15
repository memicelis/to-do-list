import _ from 'lodash';
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
  const toDoListContainer = document.getElementById('to-do-list-container');
  const toDoList = document.createElement('ul');
  toDoList.classList.add('to-do-list');
  toDoListContainer.appendChild(toDoList);

  const titleList = document.createElement('li');
  titleList.classList.add('todolist-title');
  titleList.innerText = "Today's To Do";
  const addList = document.createElement('li');
  addList.classList.add('todolist-add');
  addList.innerText = 'Add to your list...';

  toDoList.appendChild(titleList);
  toDoList.appendChild(addList);
  const sortedListData = _.sortBy(listData, 'index');
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
