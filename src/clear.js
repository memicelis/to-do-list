export const clearingCheckBox = (event) => {
  const checkBox = event.target.closest('.task');
  if (!checkBox) return;
  const index = parseInt(checkBox.getAttribute('data-index'), 10);
  const tasksLocalStorage = JSON.parse(localStorage.getItem('tasksData')) || [];

  const clickedCheckbox = tasksLocalStorage.find(
    (task) => task.index === index,
  );
  clickedCheckbox.completed = !clickedCheckbox.completed;

  localStorage.setItem('tasksData', JSON.stringify(tasksLocalStorage));
};

export const clearAllCompleted = () => {
  let tasksLocalStorage = JSON.parse(localStorage.getItem('tasksData')) || [];
  tasksLocalStorage = tasksLocalStorage.filter(
    (task) => task.completed === false,
  );
  tasksLocalStorage.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasksData', JSON.stringify(tasksLocalStorage));
};
