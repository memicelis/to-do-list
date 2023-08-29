import displayTasks from './display.js';

const editTask = (index, newDescription) => {
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
  const taskToUpdate = listData.find((task) => task.index === index);
  if (taskToUpdate) {
    taskToUpdate.description = newDescription;
    localStorage.setItem('tasksData', JSON.stringify(listData));
  }
  displayTasks();
};

export default editTask;
