import React from 'react';
import c from './TaskList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { TaskItem } from '../TaskItem/TaskItem';
import { deleteTask, toggleTask, updateTask } from '../../store/tasksSlice';

export const TaskList: React.FC = () => {
  const stateTasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const groupedTasks: {[key: string]: any} = {};

  for (let i = 0; i < stateTasks.length; i++) {
    const task = stateTasks[i];
    const date = new Date(task.createdAt).toLocaleDateString('ru-RU');

    if (!groupedTasks[date]) {
      groupedTasks[date] = [];
    }
    groupedTasks[date].push(task);
  }

  const groupedTasksArray = Object.entries(groupedTasks);

  const handleUpdateTask = (id: number, text: string) => {
    dispatch(updateTask({ id, text }));
  }

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  }

  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));
  }
  
  return (
    <section className={c.taskList}>
      <h2 className='visually-hidden'>Список задач</h2>
      <div className={`container ${c.taskList__container}`}>
        {groupedTasksArray.length > 0 ?
          groupedTasksArray.map(([date, tasks]) => (
            <div key={Date.now()} className={c.taskList__group}>
              <h3 className={c.taskList__date}>{date === new Date().toLocaleDateString() ? 'Сегодня' : date}</h3>
              <ul className={c.taskList__list}>
                {tasks.map((task: any) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    handleUpdateTask={handleUpdateTask}
                    handleDeleteTask={handleDeleteTask}
                    handleToggleTask={handleToggleTask}
                  />
                ))}
              </ul>
            </div>
          ))
          :
          <p className={c.taskList__empty}>Список пуст</p>
        }
      </div>
    </section>
  );
}
