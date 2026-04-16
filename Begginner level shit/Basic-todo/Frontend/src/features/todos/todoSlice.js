import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosInstance";

export const fetchTodos = createAsyncThunk(
  "todos/get",
  async () => {
    const res = await API.get("/todos");
    return res.data.data;
  }
);

export const addTodo = createAsyncThunk(
  "todos/add",
  async (data) => {
    const res = await API.post("/todos", data);
    return res.data.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id) => {
    await API.delete(`/todos/${id}`);
    return id;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(
          (t) => t._id !== action.payload
        );
      });
  },
});

export default todoSlice.reducer;