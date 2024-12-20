import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
}

const loadTasksFromLocalStorage = () => {
  const tasksJSON = localStorage.getItem("tasks");
  if (tasksJSON) {
    return JSON.parse(tasksJSON);
  }
  return [];
}

const initialState: Task[] = loadTasksFromLocalStorage();

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.unshift(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    updateTask: (state, action: PayloadAction<{id: number, text: string}>) => {
      const {id, text} = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.text = text;
        task.updatedAt = new Date().toISOString();
      }
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const updatedState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedState));
      return updatedState;
    },
  },
})

export const { addTask, toggleTask, updateTask, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;
