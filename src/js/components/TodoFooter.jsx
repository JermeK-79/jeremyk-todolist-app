import '../../styles/todoList.css'

const TodoFooter = ({ todos, setTodos }) => {
	return (
		<>
		<footer className="footer d-flex justify-content-evenly">
		{todos.length !== 1 ? `${todos.length} items left.` : `${todos.length} item left.`}
		<button onClick={() => setTodos([])} className='footer-clear ms-2 px-4 py-2 fw-semibold text-white bg-gradient rounded-pill shadow-sm border-0'>Clear all tasks!</button>
		</footer>
		</>
	);
};

export default TodoFooter;