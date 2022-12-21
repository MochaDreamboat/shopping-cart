import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Items from './components/Items';
import Checkout from './components/Checkout.js';

function App() {
  // Hold cart items in state here.
  // Items component should be able to update cart state.
  // Cart state is passed to Cart and Checkout

  const [cart, modifyCart] = useState({});

  const addToCart = (item, quantityToAdd) => {
    // Look up cart item key inside cart.CartItems
    // If item not in cart already, add new item to cart items array, stored
    // as : {itemName: name, itemPrice: price, quantity: }
    // If already in cartItems, currentQuantity += target value in input.
    let itemToAdd = item.itemName
    console.log(itemToAdd)
    console.log(cart)
    if (itemToAdd in cart) {
      modifyCart({...cart, [itemToAdd]: {...cart[itemToAdd], quantity: cart[itemToAdd].quantity + quantityToAdd}});
      return
    };
    modifyCart({...cart, [itemToAdd]: {...cart[itemToAdd], quantity: quantityToAdd}})
  };

  useEffect( () => {
    console.table(cart);
  }, [cart]);
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
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/items" element={<Items addToCart={addToCart}/>} />
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
