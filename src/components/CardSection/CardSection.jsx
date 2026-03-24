import React, { use, useState } from 'react';
import FoodCard from '../Card/FoodCard';
import './CardSection.css'
import CartItems from '../Cart/CartItems';
import { ToastContainer, toast } from 'react-toastify';

const CardSection = ({foodPromise}) => {
    const foodPromiseData=use(foodPromise);
    // console.log(foodPromiseData.meals);
    const foodData=foodPromiseData.meals;

    const [cart,setCart]=useState([]);

    const addToCart=(foodData)=>
    {
        // console.log("hello from addtocart");
        if(!cart.includes(foodData))
        {
            setCart([...cart,foodData]);
        }
    }
    const handleOrder=()=>
    {
        setCart([]);
        // toast("Order Completed!!!!");
        // toast.error("Order Completed!!!!");
        // toast.warning("Order Completed!!!!");
        toast.success("Order Completed!!!!");

    }


    return (
        <div className='card-container-parent'>
            
            <div className='card-container'>
                {
                    foodData.map(food=><FoodCard key={food.idMeal} addToCart={addToCart} food={food}></FoodCard>)
                }
            </div>
            <div className='cart-section'>
                <CartItems cart={cart}></CartItems>
                <button onClick={handleOrder}>Order</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CardSection;