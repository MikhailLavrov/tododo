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
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}

const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

const initialState: Task[] = loadTasksFromLocalStorage();

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.unshift(action.payload);
      saveTasksToLocalStorage(state);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
        saveTasksToLocalStorage(state);
      }
    },
    updateTask: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const { id, text } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        if (text.trim() === '') {
          // Если текст пустой, удаляем задачу
          const index = state.findIndex((task) => task.id === id);
          if (index !== -1) {
            state.splice(index, 1);  // Удаляем задачу из состояния
          }
        } else if (text.trim() !== task.text) {
          // Если текст изменился, обновляем задачу
          task.text = text;
          task.updatedAt = new Date().toISOString();
        }
        saveTasksToLocalStorage(state);
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const updatedState = state.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(updatedState);
      return updatedState;
    },
    deleteAllTasks: (state, action: PayloadAction<boolean>) => {
      if (action.payload === true) {
        localStorage.removeItem("tasks");
        return [];
      }
      saveTasksToLocalStorage(state);
    },
  },
})

export const { addTask, toggleTask, updateTask, deleteTask, deleteAllTasks} = tasksSlice.actions;
export default tasksSlice.reducer;
