export const TASKS_KEY = 'Tasks';
export const THEME_KEY = 'Theme';

export function addDataToLocalStorage(key, value) {
  const normalizedData = JSON.stringify(value);
  localStorage.setItem(key, normalizedData);
}

export function getDataFromLocalStorage(key) {
  const lsData = localStorage.getItem(key);
  return lsData ? JSON.parse(lsData) : [];
}
