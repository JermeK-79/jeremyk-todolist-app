import '../../styles/todoList.css'
import { deleteTask } from './fetch';

const TodoTasks = ({todos, setTodos}) => {

	let renderTasks = todos.map(todo => {
		
		return(
			<li className="list-item fs-4 d-flex justify-content-between align-items-center border-bottom border-dark mb-2 ps-3" key={todo.id}>
				<label>{todo.label}</label>
				<button
					className="delete-task btn btn-outline-danger btn-sm me-2"
					onClick={() => {deleteTask(todo.id, setTodos)}}
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