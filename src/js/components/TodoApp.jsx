import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoTasks from "./TodoTasks";
import TodoFooter from "./TodoFooter";



const TodoApp = () => {

    const [todos, setTodos] = useState([]);

	return (
		<>
		<TodoInput todos={todos} setTodos={setTodos} />
		<TodoTasks todos={todos} setTodos={setTodos} />
		<TodoFooter todos={todos}/>
		</>
	);
};

export default TodoApp;