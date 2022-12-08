// Should reflect item's name, price, and quantity
// Customer should be able to add from cart directly on items screen.
// Customer should be able to click on an item for a full description.
    // Should also be able to add to cart from this same interface.
const Item = ({ item, addToCart }) => {

    const {name, image, price } = item

    return ( 
    <div className="item" id="1">
        <img src={image} alt={name}/>
        <span className="item-name">{name}</span>
        <span className="item-price">{price}</span>
        <button onClick={(e) => addToCart()}>Add Item</button>
        <div className="quantity">
            <input type="number" placeholder="0"></input>
        </div>
    </div>
    )
};

export default Item;