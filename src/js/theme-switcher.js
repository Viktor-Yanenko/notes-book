import {
  THEME_KEY,
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from './local-storage-api';
import refs from './refs.js';

export function switchTheme() {
  if (refs.body.classList.contains('theme-dark')) {
    refs.body.classList.replace('theme-dark', 'theme-light');
    addDataToLocalStorage(THEME_KEY, 'light');
  } else {
    refs.body.classList.replace('theme-light', 'theme-dark');
    addDataToLocalStorage(THEME_KEY, 'dark');
  }
}

export function renderTheme() {
  const lsTheme = getDataFromLocalStorage(THEME_KEY);
  if (lsTheme === 'light') {
    refs.body.classList.replace('theme-dark', 'theme-light');
  } else {
    refs.body.classList.replace('theme-light', 'theme-dark');
  }
}
