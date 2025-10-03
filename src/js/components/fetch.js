export const getData = async (setTodos) => {
  const response = await fetch('https://playground.4geeks.com/todo/users/jeremyk');
  if (!response.ok) throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
  const data = await response.json();
  setTodos(data.todos);
};

export const postData = async (setTodos, newTodoObject) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodoObject),
  };
  const response = await fetch('https://playground.4geeks.com/todo/todos/jeremyk', options);
  if (!response.ok) throw new Error(`POST failed: ${response.status} ${response.statusText}`);
  console.log('Successfully posted new todo!');
  await getData(setTodos);
};

export const deleteTask = async (todoId, setTodos) => {
  const response = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, { method: 'DELETE' });
  if (response.status === 404) throw new Error(`Error! Todo ID #${todoId} does not exist!`);
  if (!response.ok) throw new Error(`Delete failed: ${response.status} ${response.statusText}`);
  await getData(setTodos);
};

export const postNewUser = async (userName) => {
  const response = await fetch(`https://playground.4geeks.com/todo/users/${userName}`, { method: 'POST' });
  if (response.status === 400) throw new Error('Error! User already exists');
  if (!response.ok) throw new Error(`Create user failed: ${response.status} ${response.statusText}`);
};

export const deleteAllTasks = async (setTodos, todos) => {
  try {
    for (const todo of todos) {
      const response = await fetch(`https://playground.4geeks.com/todo/todos/${todo.id}`, { method: 'DELETE' });
      if (!response.ok) console.warn(`Failed to delete task ${todo.id}: ${res.status} ${res.statusText}`);
    }
    console.log('All tasks deleted (sequentially).');
    await getData(setTodos);
  } catch (Error) {
    console.error('Error deleting tasks:', err);
  }
};
