import updateCompleted from '../__mocks__/updateCompleted.js';

describe('update Completed', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div class="task" data-index="0">
          <input type="checkbox" />
        </div>
        <div class="task" data-index="1">
          <input type="checkbox" />
        </div>
      `;
  });

  it('check for localStorage and DOM', () => {
    const listData = [
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
    ];
    localStorage.setItem('tasksData', JSON.stringify(listData));
    // Call the function
    updateCompleted();

    const checkbox = document.querySelector('.task input[type="checkbox"]');

    // Simulate checking the first checkbox
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));

    // Retrieve the updated tasks data from localStorage
    const updatedTasksData = JSON.parse(localStorage.getItem('tasksData'));

    // Check if the completed status in localStorage is updated
    expect(updatedTasksData[0].completed).toBe(true);

    // Check if the DOM element's checked status changed
    expect(checkbox.checked).toBe(true);
  });
});
