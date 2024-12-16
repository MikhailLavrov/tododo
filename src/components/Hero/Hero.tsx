import { useState } from 'react';
import c from './Hero.module.css';

export const Hero = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <section className={c.hero}>
      <h1 className='visually-hidden'>Список задач</h1>
      {!isEmpty ?
        <></>
      :  
        <p className={c.hero__title}>Мои <br /> задачи</p>
      }
    </section>
  );
};