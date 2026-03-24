import React, { use } from 'react';
import FoodCard from '../Card/FoodCard';
import './CardSection.css'

const CardSection = ({foodPromise}) => {
    const foodPromiseData=use(foodPromise);
    // console.log(foodPromiseData.meals);
    const foodData=foodPromiseData.meals;
    return (
        <div>
            <h2 style={{textAlign:"center",textDecoration:"underline",fontSize:"3rem"}}>Our Food Section</h2>
            <div className='card-container'>
                {
                    foodData.map(food=><FoodCard key={food.idMeal} food={food}></FoodCard>)
                }
            </div>

        </div>
    );
};

export default CardSection;