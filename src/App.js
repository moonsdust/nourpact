import Home from './components/home.js';
import Cart from './components/cart.js';
import {  BrowserRouter as Router, Route, Routes, Switch, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
