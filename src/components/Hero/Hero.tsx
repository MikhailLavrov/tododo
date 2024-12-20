import { useState } from 'react';
import c from './Hero.module.css';
import { useSelector } from 'react-redux';

export const Hero = () => {
  const tasks = useSelector((state: any) => state.tasks);
  const today = new Date().toLocaleDateString('ru-RU');

  return (
    <section className={c.hero}>
      <h1 className='visually-hidden'>Список задач</h1>
      <div className={`container ${c.hero__container}`}>
        <p className={c.hero__title}>Мои <br /> задачи</p>
        <div className={c.hero__infoWrapper}>
          <p className={c.hero__date}>{today}</p>
          <p className={c.hero__tasksAmount}>Всего: {tasks.length}</p>
        </div>
      </div>
    </section>
  );
};