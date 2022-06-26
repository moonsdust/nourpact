import './App.css';
import Cart from './cart.js';
import {useNavigate} from 'react-router';

function Home() {
    const navigate = useNavigate();
  return (
    <div className="Home">
      <nav>
        <a>Code</a>
      </nav>
      <header className="Home-header">
        <h1>Nourpact</h1>
        <p>nourishment & impact. <br></br>the app to tackle food waste.</p>
        <div className='buttonsSidebyside'>
          <button className="homeButton">Look for Food Rescue Places</button>
          <button className="homeButton" onClick={() => navigate('/Cart')}>Recipes with Leftovers</button>
        </div>
      </header>
    </div>
  );
}

export default Home;
