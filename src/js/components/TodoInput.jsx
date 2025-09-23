import { useState } from "react";


const TodoInput = ({todos, setTodos})=> {
	
	const [newTask, setNewTask] = useState("");
	const [counter, setCounter] = useState(0);

	const addTask = () => {
		
		let newTodoObject = {
			id: counter,
			title: newTask,
		}

		setTodos([...todos, newTodoObject]);

		setCounter(counter + 1);

	}
	
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
			<input 
				type="text"
				className="new-todo"
				placeholder="What needs to be done?"
				value={newTask}
				onChange={event => setNewTask(event.target.value)}
			/>
			<button
				className="add-task text-white bg-primary rounded-pill"
				onClick={checkTextBox}
			>Add Task</button>
            
		</>
	);
};

export default TodoInput;