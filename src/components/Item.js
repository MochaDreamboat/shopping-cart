// Should reflect item's name, price, and quantity
// Customer should be able to add from cart directly on items screen.
// Customer should be able to click on an item for a full description.
    // Should also be able to add to cart from this same interface.

// Modifies shopping cart state which is passed to checkout state
import React, { useState } from 'react'; 
const Item = ({ item }) => {
    
  const { itemName, image, price } = item;
  const [quantity, updateQuantity] = useState(0);
  // Fns for incrementing / decrementing an Item w/ button
  const increment = (e) => {
    updateQuantity(quantity + 1);
  }

  const decrement = (e) => {
    if (quantity !== 0) {
      updateQuantity(quantity - 1);
    }
  }

  return ( 
  <div className='item' key={itemName}>
      <img classitemN='item-image' src={require(`../items/item_images/${image}`)} alt={itemName}/>
      <span classitemN='item-title'>{itemName}</span>
      <span className='item-price'>{price}</span>
      <div className='add-to-cart'>
        <button onClick={decrement}>-</button>
        <input type="number" placeholder={quantity} />
        <button onClick={increment}>+</button>
      </div>
      <button className='add'>Add item</button>
    </div>
  )
};

export default Item;
  
