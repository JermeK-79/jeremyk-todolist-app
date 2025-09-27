const getData = async () => {
const response = await fetch('https://playground.4geeks.com/todo/users/jeremyk')
    console.log(response);
    if(!response.ok) {
        console.log("Error!", response.status, response.statusText)
        return {
            error:{
                status: response.status,
                statusText: response.statusText
                },
            };
        }
    const data = await response.json();
    console.log(data);
    setTodos(data.todos);
    };

let postData = async(setTodos, newTodoObject) => {
    let options = {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodoObject),
}
const response = await fetch('https://playground.4geeks.com/todo/todos/jeremyk', options)
if(!response.ok) {
            console.log("Error!", response.status, response.statusText)
            return {
                error:{
                    status: response.status,
                    statusText: response.statusText
                    },
                };
            }
            console.log("Successfully posted new todo!");
            getData(setTodos);
}  

export default getData;