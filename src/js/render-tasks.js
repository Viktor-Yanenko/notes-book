import refs from './refs.js'
import { createTask, deleteTask } from './tasks.js';
import { getDataFromLocalStorage } from './local-storage-api.js';


export function renderTask(task) {
    const markup = `
    <li class="task-list-item" data-id="${task.id}">
        <button class="task-list-item-btn">Delete</button>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
      </li>`;
    refs.taskList.insertAdjacentHTML('beforeend', markup)
}

export function renderAllTasks() {
    const tasks = getDataFromLocalStorage();
    refs.taskList.innerHTML = '';
    tasks.forEach(renderTask);
}

export function handleSubmit(event) {
    event.preventDefault();
    const title = refs.inputTaskTitle.value.trim();
    const description = refs.inputTaskDescription.value.trim();
    if (title === '' || description === '') {
        alert('Please fill all input fields'); // need to add iziToast
        return;
    }

    const newTask = createTask(title, description);
    renderTask(newTask)
    refs.taskForm.reset();
}


export function handleDelete(event) {
    if (event.target.classList.contains('task-list-item-btn')) {
        const card = event.target.closest('.task-list-item');
        const id = card.dataset.id;
        deleteTask(id);
        card.remove();
    }
}