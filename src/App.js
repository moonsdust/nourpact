import Home from './components/home.js';
import Cart from './components/cart.js';
import Recipe from './components/RecipeApi';
import FoodRescue from './components/FoodRescueApi';
import {  BrowserRouter as Router, Route, Routes, Switch, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Recipe" element={<Recipe/>} />
        <Route path="/FoodRescue" element={<FoodRescue/>} />
      </Routes>
    </Router>
  );
}

export default App;
