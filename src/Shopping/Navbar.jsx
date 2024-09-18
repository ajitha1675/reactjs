import React from "react";
import './Shopapp.css';

function Navbar() {
    return (
        <div>
            <header className="header">
                <h1>ShopEase</h1>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#shop">Mens</a>
                    <a href="#shop">Womens</a>
                    <a href="#cart">Cart</a>
                    <a href="#contact">Contact Us</a>
                </nav>
            </header>

           
            <section className="banner">
                <img src="./shopping/th.jpeg" alt="ShopEase Banner" className="banner-image" />
            </section>

            
            <section className="signup">
                <h2>Sign Up for Exclusive Offers</h2>
                <form>
                    <input type="text" placeholder="Enter your name" required />
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Sign Up</button>
                </form>
            </section>
        </div>
    );
}

export default Navbar;
