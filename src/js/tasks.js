import {
  TASKS_KEY,
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from './local-storage-api.js';

export function createTask(title, description) {
  const task = {
    id: String(Math.floor(Math.random() * 10000)).padStart(4, 0),
    title,
    description,
  };

  const tasks = getDataFromLocalStorage(TASKS_KEY);
  tasks.push(task);
  addDataToLocalStorage(TASKS_KEY, tasks);

  return task;
}

export function deleteTask(id) {
  const tasks = getDataFromLocalStorage(TASKS_KEY);
  const updatedTasks = tasks.filter(task => task.id != id);
  addDataToLocalStorage(TASKS_KEY, updatedTasks);
}
