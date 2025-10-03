import '../../styles/todoList.css'
import { useState } from 'react';
import { deleteAllTasks } from './fetch';

const TodoFooter = ({ todos, setTodos }) => {
  const [clear, setClear] = useState(false);
  const count = todos.length;
  const label = count === 1 ? "item" : "items";

  const handleClearAll = async () => {
    if (count === 0) return;
    setClear(true);
    await deleteAllTasks(setTodos, todos);
    setClear(false);
  };

  return (
    <footer className="footer d-flex justify-content-evenly align-items-center gap-3">
      <span>{count} {label} left.</span>
      <button className='clear-button ms-2 px-4 py-2 fw-semibold text-white bg-gradient rounded-pill shadow-sm border-0'
        disabled={count === 0 || clear}
        onClick={handleClearAll}
      >
        {clear ? "Clearing…" : "Clear all tasks!"}
      </button>
    </footer>
  );
};

export default TodoFooter;

