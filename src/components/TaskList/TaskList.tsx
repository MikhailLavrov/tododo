import React from 'react';
import c from './TaskList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList: React.FC = () => {
  const stateTasks = useSelector((state: RootState) => state.tasks);
  
  return (
    <section className={c.taskList}>
      <h2 className='visually-hidden'>Список задач</h2>
      <div className={`container ${c.taskList__container}`}>
        {stateTasks.length > 0 ?
          <ul className={c.taskList__list}>
            {stateTasks.map((task: any) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
          : 
          <p className={c.taskList__empty}>Список пуст</p>
        }
      </div>
    </section>
  );
}
