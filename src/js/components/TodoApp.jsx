import { useState, useEffect } from "react";
import CreateUser from "./CreateUser";
import TodoInput from "./TodoInput";
import TodoTasks from "./TodoTasks";
import TodoFooter from "./TodoFooter";
import { getData } from "./fetch";



const TodoApp = () => {

    const [todos, setTodos] = useState([]);
	const [userName, setUserName] = useState("")

	useEffect(() => {
		getData(setTodos);
	}, [])


	return (
		<>
		<h1 className="title">To-Do List</h1>
		<div>
			<CreateUser />
		</div>
		<TodoInput todos={todos} setTodos={setTodos} />
		<TodoTasks todos={todos} setTodos={setTodos} />
		<TodoFooter todos={todos}/>
		</>
	);
};

export default TodoApp;