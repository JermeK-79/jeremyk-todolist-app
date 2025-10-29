export const getData = async (setTodos, currentUser) => {
  const response = await fetch(`https://playground.4geeks.com/todo/users/${currentUser}`);
  if (!response.ok) throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
  const data = await response.json();
  setTodos(data.todos);
};

export const postData = async (setTodos, newTodoObject, currentUser) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodoObject),
  };
  const response = await fetch(`https://playground.4geeks.com/todo/todos/${currentUser}`, options);
  if (!response.ok) throw new Error(`POST failed: ${response.status} ${response.statusText}`);
  console.log('Successfully posted new todo!');
  await getData(setTodos, currentUser);
};

export const deleteTask = async (todoId, setTodos, currentUser) => {
  const response = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, { method: 'DELETE' });
  if (response.status === 404) throw new Error(`Error! Todo ID #${todoId} does not exist!`);
  if (!response.ok) throw new Error(`Delete failed: ${response.status} ${response.statusText}`);
  await getData(setTodos, currentUser);
};

export const postNewUser = async (userName, setCurrentUser) => {
  const response = await fetch(`https://playground.4geeks.com/todo/users/${userName}`, { method: 'POST' });
  if (response.status === 400) throw new Error('Error! User already exists');
  if (!response.ok) throw new Error(`Create user failed: ${response.status} ${response.statusText}`);
  
  setCurrentUser(userName);
};

export const deleteAllTasks = async (setTodos, todos, currentUser) => {
  try {
    const deletePromises = todos.map(todo => 
      fetch(`https://playground.4geeks.com/todo/todos/${todo.id}`, { method: 'DELETE' })
        .then(response => {
          if (!response.ok) console.warn(`Failed to delete task ${todo.id}: ${response.status} ${response.statusText}`);
        })
    );
    
    await Promise.all(deletePromises);
    console.log('All tasks deleted.');
    await getData(setTodos, currentUser);
  } catch (err) {
    console.error('Error deleting tasks:', err);
    throw err;
  }
};