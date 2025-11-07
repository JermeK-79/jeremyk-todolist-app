import { useState, useEffect } from "react";
import CreateUser from "./CreateUser";
import TodoInput from "./TodoInput";
import TodoTasks from "./TodoTasks";
import TodoFooter from "./TodoFooter";
import { getData, deleteUser } from "./fetch";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [userName, setuserName] = useState("");
    const [currentUser, setCurrentUser] = useState(() => {
        return localStorage.getItem('currentUser') || null;
    });

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', currentUser);
            
            const fetchTodos = async () => {
                try {
                    await getData(setTodos, currentUser);
                } catch (error) {
                    console.error("Failed to load todos:", error);
                }
            };
            fetchTodos();
        } else {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);

    const handleLogout = async () => {
        const confirmDelete = window.confirm(
            `Are you sure you want to logout and delete your account "${currentUser}"? This action cannot be undone.`
        );
        
        if (!confirmDelete) return;
        
        try {
            await deleteUser(currentUser);
            setCurrentUser(null);
            setTodos([]);
        } catch (error) {
            console.error("Failed to delete user:", error);
            alert("Failed to delete user account.");
        }
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
                    Logout & Delete Account
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