import { Routes, Route } from 'react-router-dom';
import { LayoutComponent } from '../Layout/Layout';
import { Hero } from '../Hero/Hero';
import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage';

const MainPage = () => {
  return (
    <>
      <WelcomeMessage />
      <Hero />
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
