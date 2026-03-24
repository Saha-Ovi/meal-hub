import React from 'react';
import './Cart.css';

const Cart = ({item}) => {
    return (
        <div>
               <div className='cart'>
                <img src={item.strMealThumb} alt="" />
                <h2>Name : {item.strMeal}</h2>
                <p>Cuisine : {item.strArea}  </p>
                <p>Category : {item.strCategory}</p>
            </div>
        </div>
    );
};

export default Cart;