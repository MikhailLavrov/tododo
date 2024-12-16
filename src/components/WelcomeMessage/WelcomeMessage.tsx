import { useEffect, useState } from 'react';
import c from './WelcomeMessage.module.css';

export const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);
  const [greeting, setGreeting] = useState<string>('Привет');
  const [isUser, setIsUser] = useState<string>('Tovarisch');

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
    // Возвращаем null, чтобы избежать мерцания до установки видимости
    return null;
  }

  return (
    <>
      {isVisible && (
        <div className={c.welcome}>
          <p>{greeting}, <br /> {isUser}</p>
        </div>
      )}
    </>
  )
}
