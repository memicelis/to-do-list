import { addTask } from '../__mocks__/addRemoveTask.js';
import clearAllCompleted from '../__mocks__/clearCompleted.js';

describe('Clear All Completed', () => {
  beforeEach(() => {
    document.body.innerHTML = `
          <ul id="todo-list"></ul>
        `;
  });

  it('check local storage and DOM', () => {
    localStorage.clear();
    addTask();
    clearAllCompleted();
    const storedData = JSON.parse(localStorage.getItem('tasksData'));
    expect(storedData.length).toEqual(1);
    const liElements = document.querySelectorAll('#todo-list li');
    expect(liElements.length).toBe(1);
  });
});
