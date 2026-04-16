import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo } from "../features/todos/todoSlice.js";
import AddTodo from "../components/AddTodo.jsx";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <AddTodo />

      {todos.map((todo) => (
        <div key={todo._id}>
          {todo.title}
          <button onClick={() => dispatch(deleteTodo(todo._id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}