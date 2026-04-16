import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/auth/authSlice";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo({ title }));
      }}
    >
      <input onChange={(e) => setTitle(e.target.value)} />
      <button>Add</button>
    </form>
  );
}