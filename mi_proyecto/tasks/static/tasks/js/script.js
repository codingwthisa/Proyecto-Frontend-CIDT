// tasks/static/tasks/js/script.js

// Función para eliminar una tarea
function deleteTask(button) {
    const taskId = button.closest('li').getAttribute('data-task-id');
    fetch(`/delete/${taskId}/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        },
    })
    .then(response => {
        if (response.ok) {
            button.closest('li').remove();
        }
    });
}

// Función para marcar una tarea como completada
function toggleTask(button) {
    const taskId = button.dataset.taskId;
    fetch(`/toggle/${taskId}/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        },
    })
    .then(response => {
        if (response.ok) {
            const taskItem = button.closest('li');
            taskItem.classList.toggle('completada'); // Añade o elimina la clase completada
        }
    });
}

// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

// Agregar event listeners a los botones de eliminar y completar
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', () => {
        deleteTask(button);
    });
});

document.querySelectorAll('.toggle-btn').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        toggleTask(item); // Llama a la función toggleTask() cuando se hace clic en el botón
    });
});
