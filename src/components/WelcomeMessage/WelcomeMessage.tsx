import { useEffect, useState } from 'react';
import c from './WelcomeMessage.module.css';
import { useSelector } from 'react-redux';

export const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);
  const [greeting, setGreeting] = useState<string>('Привет');
  const name = useSelector((state: any) => state.user.userName);

  useEffect(() => {
    const isGreetingShown = sessionStorage.getItem('isGreetingShown');

    if (!isGreetingShown) {

      // Определяем текущее время и устанавливаем приветствие
      const currentHour = new Date().getHours();

      if (currentHour >=5 && currentHour < 12) {
        setGreeting('Доброе утро');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Добрый день');
      } else if (currentHour >= 18 && currentHour < 22) {
        setGreeting('Добрый вечер')
      } else {
        setGreeting('Доброй ночи');
      }
      
      // Удаляем приветствие через 2 секунды
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('isGreetingShown', 'true');
      }, 2000);

      setIsVisible(true);

      return () => {
        clearTimeout(timer);
      }
    } else {
      setIsVisible(false)
    }
  }, [])

  if (isVisible === null) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <div className={c.welcome}>
          <p>{greeting}, <br /> {name}</p>
        </div>
      )}
    </>
  )
}
