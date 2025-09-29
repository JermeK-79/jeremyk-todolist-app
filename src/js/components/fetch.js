export const getData = async (setTodos) => {
const response = await fetch('https://playground.4geeks.com/todo/users/jeremyk')
    console.log(response);
    if(!response.ok) {
        console.log("Error: ", response.status, response.statusText);
        return {
            error:{
                status: response.status,
                statusText: response.statusText
                }
            };
        }
    const data = await response.json();
    setTodos(data.todos)
    };

export const postData = async(setTodos, newTodoObject) => {
    let options = {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodoObject),
}
const response = await fetch('https://playground.4geeks.com/todo/todos/jeremyk', options)
if(!response.ok) {
            console.log("Error: ", response.status, response.statusText);
            return {
                error:{
                    status: response.status,
                    statusText: response.statusText
                    }
                };
            }
            console.log("Successfully posted new todo!");
            getData(setTodos);
}  

export const deleteTask = async(todoId, setTodos) => {
    let options = {
        method: "DELETE",
    }
    const response = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, options);

    if (response.status === 404) {
        throw new Error(`Error! Todo ID #${todoId} does not exist!`)
    }
    getData(setTodos);
}