import { useState } from "react";
import { postData } from "./fetch";


const TodoInput = ({todos, setTodos})=> {
	
	const [newTask, setNewTask] = useState("");
	const [counter, setCounter] = useState(0);

	const addTask = () => {
		
		let newTodoObject = {
			label: newTask,
			is_done: false,
		};

		postData(setTodos, newTodoObject);

		setTodos([...todos, newTodoObject]);

		setNewTask("");
  	};
	
	const checkTextBox = () => {
		let textBox = document.querySelector(".new-todo");
		if (textBox.value === "") {
			alert("Please add a task.");
		}
		else {
			addTask();
		}
	}
	
	return (
		<>
			<header className="header text-center">
			<h1 className="title">To-Do List</h1>
			<input 
				type="text"
				className="new-todo"
				placeholder="What needs to be done?"
				value={newTask}
				onChange={event => setNewTask(event.target.value)}
			/>
			<button
				className="add-task ms-2 px-4 py-2 fw-semibold text-white bg-gradient rounded-pill shadow-sm border-0"
				onClick={checkTextBox}
			>Add Task</button>
			</header>
            
		</>
	);
};

export default TodoInput;