import { Routes, Route } from 'react-router-dom';
import { LayoutComponent } from '../Layout/Layout';
import { Hero } from '../Hero/Hero';
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage';
import { Category } from '../Category/Category';
import { TaskList } from '../TaskList/TaskList';
import { AddTaskModal } from '../AddTaskModal/AddTaskModal';

const MainPage = () => {
  return (
    <>
      <WelcomeMessage />
      <Hero />
      <Category />
      <TaskList />
      <AddTaskModal />
    </>
  );
}

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent /> }>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}
