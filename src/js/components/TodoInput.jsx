import { useState } from "react";
import { postData } from "./fetch";

const TodoInput = ({ todos, setTodos, currentUser }) => {
	const [newTask, setNewTask] = useState("");

	const addTask = async () => {
		if (newTask.trim() === "") {
			alert("Please add a task.");
			return;
		}

		const newTodoObject = {
			label: newTask,
			is_done: false,
		};

		try {
			await postData(setTodos, newTodoObject, currentUser);
			setNewTask("");
		} catch (error) {
			console.error("Failed to add task:", error);
			alert("Failed to add task. Please try again.");
		}
	};

	return (
		<header className="header mt-3 text-center">
			<input 
				type="text"
				className="new-todo"
				placeholder="What needs to be done?"
				value={newTask}
				onChange={(event) => setNewTask(event.target.value)}
			/>
			<button
				className="add-task ms-2 px-4 py-2 fw-semibold text-white bg-success rounded-pill shadow-sm border-0"
				onClick={addTask}
			>
				Add Task
			</button>
		</header>
	);
};

export default TodoInput;