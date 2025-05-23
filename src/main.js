/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import {
  handleSubmit,
  handleDelete,
  renderAllTasks,
} from './js/render-tasks.js';
import refs from './js/refs.js';
import { switchTheme, renderTheme } from './js/theme-switcher.js';

document.addEventListener('DOMContentLoaded', renderAllTasks);
document.addEventListener('DOMContentLoaded', renderTheme);
refs.taskForm.addEventListener('submit', handleSubmit);
refs.taskList.addEventListener('click', handleDelete);
refs.themeToggleButton.addEventListener('click', switchTheme);
