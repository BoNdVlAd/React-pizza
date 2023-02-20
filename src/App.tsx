import './scss/app.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';

import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

//new-feature
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="basket" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="pizza/:id" element={<FullPizza />} />
      </Route>
    </Routes>
    // hello world
  );
}

export default App;
