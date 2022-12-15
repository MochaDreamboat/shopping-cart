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
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/items" element={<Items />} />
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
