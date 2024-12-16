import { Routes, Route } from 'react-router-dom';
import { LayoutComponent } from '../Layout/Layout';

const MainPage = () => {
  return (
    <>
      <div>Hello world</div>
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
