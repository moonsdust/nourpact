import './App.css';

function App() {
  return (
    <div className="Home">
      <nav>
        <a>About & How it Works</a>
        <a>Code</a>
        <a>Our Team</a>
      </nav>
      <header className="Home-header">
        <div className="header">Nourpact</div>
        <p>nourishment & impact. <br></br>the app to tackle food waste.</p>
        <div className='buttonsSidebyside'>
          <button className='homeButton'>Look for Food Rescue Places</button>
          <button className='homeButton'>Recipes with Leftovers</button>
        </div>
      </header>
    </div>
  );
}

export default App;
