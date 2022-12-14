import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Items from './components/Items';
import Checkout from './components/Checkout.js';

function App() {

  return (
    <div className="App">
      <header>
        <h1 id="business-title">VEKTOR CYBERNETICS</h1>
        <ul>
          <li><Link to="/">ABOUT</Link></li>
          <li><Link to="./items">ITEMS</Link></li>
          <li><Link to="./checkout">CHECKOUT</Link></li>
        </ul>
      </header>
      {/* Mockup for cart Component / items */}
      {/* <div className='shopping-cart'>
        <div className='item'>
          <img className='item-image' src={require("./images/items/SandevistanMk3.webp")} alt="sandevistan"/>
          <span className='item-title'>Sandevistan Mk. 3</span>
          <span className='item-price'>35,000</span>
          <div className='add-to-cart'>
            <button>-</button>
            <input type="number"/>
            <button>+</button>
          </div>
          <button className='add'>Add item</button>
        </div>
      </div> */}
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Items />} />
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
