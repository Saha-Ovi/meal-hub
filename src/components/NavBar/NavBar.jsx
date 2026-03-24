import React from 'react';
import './NavBar.css'
import navImg from "../../assets/food.jpg"

const NavBar = () => {
    return (

      
          <nav className='nav-container'>
            <div className='nav-left'>
                <img src={navImg} alt="" />
                <h2>Meal Hub</h2>
            </div>
            <div className='nav-right'>

                <ul className='nav-right-container'>
                    <li><a href="">Order Details</a></li>
                    <li><a href="">Food Hub</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Food Review</a></li>
                </ul>
            </div>
        </nav>
      
    );
};

export default NavBar;