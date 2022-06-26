import './App.css';
import Cart from './cart.js';
import {useNavigate} from 'react-router';

function Home() {
    const navigate = useNavigate();
  return (
    <div className="Home">
      <header className="Home-header">
        <h3>Nourpact</h3>
        <p>nourishment & impact. <br></br>the app to tackle food waste.</p>
        <div className='buttonsSidebyside'>
          <button className="homeButton" onClick={() => navigate('/FoodRescue')}>Look for Food Rescue Places</button>
          <button className="homeButton" onClick={() => navigate('/Cart')}>Recipes with Leftovers</button>
        </div>
      </header>
    </div>
  );
}

export default Home;
