import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
        task.updatedAt = new Date();
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
})

export const { addTask, toggleTask, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;
