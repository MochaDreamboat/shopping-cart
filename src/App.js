import './App.css';

function App() {

  return (
    <div className="App">
      <header>
        <h1 id="business-title">VEKTOR CYBERNETICS</h1>
        <ul>
          <li><a href="./home">HOME</a></li>
          <li><a href="./items">ITEMS</a></li>
          <li><a href="./about">ABOUT</a></li>
        </ul>
      </header>
      {/* Mockup for cart / items */}
      <div className='shopping-cart'>
        <div className='item'>
          <img className='item-image' src={require("./images/items/SandevistanMk3.webp")} alt="sandevistan"/>
          <span className='item-title'>Sandevistan Mk. 3</span>
          <span className='item-price'>35,000</span>
          <div className='add-to-cart'>
          <button>-</button>
          <input type="number" />
          <button>+</button>
          <button className='add'>Add item</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
