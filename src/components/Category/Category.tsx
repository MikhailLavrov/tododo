import { Button } from 'antd';
import c from './Category.module.css';
import React from 'react';

type CategoryType = {
  id: string,
  title: string,
}

const categoryData: CategoryType[] = [
  {
    id: 'all',
    title: 'Все'
  },
  {
    id: 'important',
    title: 'Важные'
  },
  {
    id: 'family',
    title: 'Семья'
  },
  {
    id: 'work',
    title: 'Работа'
  },
]

export const Category = () => {
  const categoryList: React.ReactNode = categoryData.map((item) => {

    return (
      <li className={c.category__item} key={item.id}>
        <Button 
          className={c.category__button} 
          onClick={(e) => e.preventDefault()}
        >
          {item.title}
        </Button>
      </li>
    )
  })

  return (
    <div className={c.category}>
      <h2 className="visually-hidden">Категории задач</h2>
      <div className={`container ${c.category__container}`}>
        <ul className={c.category__list}>
          {categoryList}
        </ul>
      </div>
    </div>
  )
}
