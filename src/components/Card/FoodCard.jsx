import React from 'react';
import './FoodCard.css'

const FoodCard = ({ food }) => {
    console.log(food);
    return (
        <div className='card'>
            <div className='card-content'>
                <img src={food.strMealThumb} alt="" />
                <h2>Name : {food.strMeal}</h2>
                <p>Cuisine : {food.strArea}  </p>
                <p>Category : {food.strCategory}</p>
            </div>
            <button>Add to Cart</button>

        </div>
    );
};

export default FoodCard;