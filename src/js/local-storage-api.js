export const TASKS_KEY = 'tasks';

export function addDataToLocalStorage(value) {
    const normalizedData = JSON.stringify(value);
    localStorage.setItem(TASKS_KEY, normalizedData);
}

export function getDataFromLocalStorage() {
    const lsData = localStorage.getItem(TASKS_KEY);
    return lsData ? JSON.parse(lsData) : [];
}