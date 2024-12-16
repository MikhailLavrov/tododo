import { useState } from 'react';
import c from './Hero.module.css';

export const Hero = () => {
  const [tasksCount, setTasksCount] = useState(0);
  const today = new Date().toLocaleDateString('ru-RU');

  return (
    <section className={c.hero}>
      <h1 className='visually-hidden'>Список задач</h1>
      <div className={`container ${c.hero__container}`}>
        <p className={c.hero__title}>Мои <br /> задачи</p>
        <div className={c.hero__infoWrapper}>
          <p className={c.hero__date}>{today}</p>
          <p className={c.hero__tasksAmount}>Всего: {tasksCount}</p>
        </div>
      </div>
    </section>
  );
};