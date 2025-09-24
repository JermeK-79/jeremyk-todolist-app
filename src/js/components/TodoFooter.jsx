import '../../styles/todoList.css'

const TodoFooter = ({ todos }) => {
	return (
		<>
		<footer className="footer ps-3 justify-content-start">
		{todos.length !== 1 ? `${todos.length} items left.` : `${todos.length} item left.`}
		</footer>
		</>
	);
};

export default TodoFooter;