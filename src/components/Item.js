// Should reflect item's name, price, and quantity
// Customer should be able to add from cart directly on items screen.
// Customer should be able to click on an item for a full description.
    // Should also be able to add to cart from this same interface.

// Modifies shopping cart state which is passed to checkout state

const Item = ({ item, cartFns }) => {
    
    const { name, image, price } = item;
    const { increment, decrement } = cartFns

    return ( 
    <div className='item'>
        <img className='item-image' src={require(image)} alt={name}/>
        <span className='item-title'>{name}</span>
        <span className='item-price'>{price}</span>
        <div className='add-to-cart'>
          <button onClick={decrement()}>-</button>
          <input type="number"/>
          <button onClick={increment()}>+</button>
        </div>
        <button className='add'>Add item</button>
      </div>
    )
};

export default Item;