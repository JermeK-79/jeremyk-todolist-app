

const TodoTasks = ({todos, setTodos}) => {

	const deleteTask = (todoId) => {
		let updatedTodos = todos.filter(todo => todo.id !== todoId)
		setTodos(updatedTodos);
	}

	let renderTasks = todos.map(todo => {
		
		return(
			<li className="list-item" key={todo.id}>
				<label>{todo.title}</label>
				<button
					className="delete-task btn btn-outline-danger d-flex text-danger justify-content-end"
					onClick={() => {deleteTask(todo.id)}}
				>X</button>
			</li>
		)
	})

	return (
		<>
			<div className="main">
				<ul className="todo-list mt-3 p-3 border-bottom list-unstyled">
					{todos.length !== 0 ? renderTasks : "No tasks. Add a task."}
				</ul>

			</div>
		</>
	);
};

export default TodoTasks;