import './scss/app.scss';
import Header from './components/Header.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route, useParams } from 'react-router-dom';
import Cart from './pages/Cart';
import React from 'react';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

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
