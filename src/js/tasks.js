import { addDataToLocalStorage, getDataFromLocalStorage } from "./local-storage-api.js";

export function createTask(title, description) {
    const task = {
        id: String(Math.floor(Math.random() * 10000)).padStart(4, 0),
        title,
        description,
    };

    const tasks = getDataFromLocalStorage();
    tasks.push(task);
    addDataToLocalStorage(tasks);

    return task;
}

export function deleteTask(id) {
    const tasks = getDataFromLocalStorage();
    const updatedTasks = tasks.filter(task => task.id != id);
    addDataToLocalStorage(updatedTasks)
}