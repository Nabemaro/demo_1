import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddMeal from './AddMeal';
import ViewMeals from './ViewMeals'
import Landing from './components/Landing';
import RecipePage from './components/RecipePage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/enterMeal' element={<AddMeal />} />
      <Route path='/viewMeals' element={<ViewMeals />} />
      <Route path='/recipePage' element={<RecipePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);