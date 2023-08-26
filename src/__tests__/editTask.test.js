import editTask from '../__mocks__/editTask.js';

describe('EDITING TASK', () => {
  beforeEach(() => {
    document.body.innerHTML = `
          <ul id="todo-list"></ul>
        `;
  });
  it('check Local Storage and DOM', () => {
    editTask(0, 'Clean the dishes');
    const storedData = JSON.parse(localStorage.getItem('tasksData'));
    const firstElement = document.querySelector(
      '#todo-list li:nth-child(1) input:nth-child(2)',
    );
    expect(storedData[0].description).toBe('Clean the dishes');
    expect(firstElement.value).toBe('Clean the dishes');
  });
});
