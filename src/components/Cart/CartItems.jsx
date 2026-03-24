import React from 'react';
import Cart from './Cart';

const CartItems = ({cart}) => {
    // console.log(cart);
    return (
        <div>
            {
                cart.map(item=> <Cart item={item}></Cart>)
            }
        </div>
    );
};

export default CartItems;