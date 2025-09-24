import '../../styles/todoList.css'

const TodoTasks = ({todos, setTodos}) => {

	const deleteTask = (todoId) => {
		let updatedTodos = todos.filter(todo => todo.id !== todoId)
		setTodos(updatedTodos);
	}

	let renderTasks = todos.map(todo => {
		
		return(
			<li className="list-item fs-4 d-flex justify-content-between align-items-center border-bottom border-dark mb-2 ps-3" key={todo.id}>
				<label>{todo.title}</label>
				<button
					className="delete-task btn btn-outline-danger btn-sm me-2"
					onClick={() => {deleteTask(todo.id)}}
				>X</button>
			</li>
		)
	})

	return (
		<>
			<div className="main">
				<ul className="todo-list mt-3 p-3 list-unstyled">
					{todos.length !== 0 ? renderTasks : "No tasks. Add a task."}
				</ul>

			</div>
		</>
	);
};

export default TodoTasks;