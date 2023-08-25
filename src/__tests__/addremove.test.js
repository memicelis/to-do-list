import { addTask, removeTask } from '../__mocks__/addRemoveTask';

describe('ADDING ITEMS', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul id="todo-list"></ul>
    `;
  });
  it('to localStorage', () => {
    localStorage.clear();
    addTask();

    const storedData = JSON.parse(localStorage.getItem('tasksData'));

    expect(storedData.length).toEqual(2);
  });
  it('to DOM', () => {
    localStorage.clear();
    addTask();

    const liElements = document.querySelectorAll('#todo-list li');

    expect(liElements.length).toBe(2);
  });
});

describe('DELETING ITEMS', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul id="todo-list"></ul>
    `;
  });
  it('to localStorage', () => {
    removeTask(0);

    const storedData = JSON.parse(localStorage.getItem('tasksData'));

    expect(storedData.length).toEqual(1);
  });
  it('to DOM', () => {
    removeTask(0);
    const liElements = document.querySelectorAll('#todo-list li');
    expect(liElements.length).toBe(1);
  });
});
