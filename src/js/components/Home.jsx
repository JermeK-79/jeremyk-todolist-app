import TodoApp from "./TodoApp";


const Home = () => {
	return (
		<>
		
			<div className="container text-center mt-5 bg-secondary">

				<h1 className="header text-center">To-Do List</h1>
				<TodoApp />

			</div>
		</>
	);
};

export default Home;