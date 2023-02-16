const baseUrl = 'https://6384c3013fa7acb14fffc5eb.mockapi.io/todo_list_tasks';

export const fetchTasks = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      throw new Error('CONNECTION ERROR');
    }
    return response.json();
  });

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
