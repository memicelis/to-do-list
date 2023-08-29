const updateCompleted = () => {
  const checkBox = document.querySelector('.task');
  if (!checkBox) return;
  const index = parseInt(checkBox.getAttribute('data-index'), 10);
  const tasksLocalStorage = JSON.parse(localStorage.getItem('tasksData')) || [];

  const clickedCheckbox = tasksLocalStorage.find(
    (task) => task.index === index,
  );
  clickedCheckbox.completed = !clickedCheckbox.completed;

  localStorage.setItem('tasksData', JSON.stringify(tasksLocalStorage));
};
export default updateCompleted;
