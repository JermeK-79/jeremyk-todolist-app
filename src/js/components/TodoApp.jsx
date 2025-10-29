import { useState, useEffect } from "react";
import CreateUser from "./CreateUser";
import TodoInput from "./TodoInput";
import TodoTasks from "./TodoTasks";
import TodoFooter from "./TodoFooter";
import { getData } from "./fetch";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [userName, setuserName] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        if (currentUser) {
            const fetchTodos = async () => {
                try {
                    await getData(setTodos, currentUser);
                } catch (error) {
                    console.error("Failed to load todos:", error);
                }
            };
            fetchTodos();
        }
    }, [currentUser]);

    const handleLogout = () => {
        setCurrentUser(null);
        setTodos([]);
    };

    if (!currentUser) {
        return (
            <div className="todo-app">
                <h1 className="title">To-Do List</h1>
                <CreateUser 
                    userName={userName} 
                    setuserName={setuserName} 
                    setCurrentUser={setCurrentUser} 
                />
            </div>
        );
    }
	
    return (
        <div className="todo-app">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="title">To-Do List for {currentUser}</h1>
                <button 
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div>
                <TodoInput todos={todos} setTodos={setTodos} currentUser={currentUser} />
                <TodoTasks todos={todos} setTodos={setTodos} currentUser={currentUser} />
                <TodoFooter todos={todos} setTodos={setTodos} currentUser={currentUser} />
            </div>
        </div>
    );
};

export default TodoApp;