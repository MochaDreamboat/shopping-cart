import Item from './Item.js';
// Consider making items a prop from app...
import mockItems from '../items/itemsOne.js';
const Items = ({addToCart}) => {
    return (
        <div>
            <h2>Take your pick, choom!</h2>
            <div id="items">
                {mockItems.map((item) => {
                    return (
                        <Item
                            item={item}
                            addToCart={addToCart}
                        />
                    )
                })}
            </div>
        </div>
        // Map through items data and display each w/
        // individual item component
    )
}

export default Items;