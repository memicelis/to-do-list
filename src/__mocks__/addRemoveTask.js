import displayTasks from './display.js';

export const addTask = () => {
  const listData = [];
  listData.push(
    {
      description: 'Mock Test 1',
      completed: false,
      index: 0,
    },
    {
      description: 'Mock Test 2',
      completed: true,
      index: 1,
    },
  );
  localStorage.setItem('tasksData', JSON.stringify(listData));
  displayTasks();
};

export const removeTask = (index) => {
  let listData = JSON.parse(localStorage.getItem('tasksData')) || [];
  listData = listData.filter((task) => task.index !== index);
  localStorage.setItem('tasksData', JSON.stringify(listData));
  displayTasks();
};
