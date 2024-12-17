import React from 'react';
import c from './TaskList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../../store/tasksSlice';
import { RootState } from '../../store/store';

export const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = React.useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({
        id: Date.now(),
        text: taskText,
        isCompleted: false,
        category: 'string',
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      setTaskText('');
    }
  }
  
  return (
    <section className={c.taskList}>
      <h2 className='visually-hidden'>Список задач</h2>
      <div className={`container ${c.taskList__container}`}>
        <div className={c.taskList__form}>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Добавить новую задачу"
          />
          <button onClick={handleAddTask}>Add</button>
         </div>
        {tasks.length > 0 ?
          <ul className={c.taskList__list}>
            {tasks.map((task: any) => (
              <li key={task.id}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => dispatch(toggleTask(task.id))}
              />
              <span>{task.text}</span>
              <button onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
            </li>
            ))}
          </ul>
          : 
          <p className={c.taskList__empty}>Список пуст</p>
        }
      </div>
    </section>
  );
}
