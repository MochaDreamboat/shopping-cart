import Item from './Item.js';
import mockItems from '../items/itemsOne.js';
const Items = () => {
    const mockIncrement = () => {console.log('increment')};
    const mockDecrement = () => {console.log('decrement')};
    const cartFns = { mockIncrement, mockDecrement }
    return (
        <div>
            <h2>Take your pick, choom!</h2>
            <div id="items">
                {mockItems.map((item) => {
                    return (
                        <Item
                            item={item}
                            cartFns={cartFns}
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