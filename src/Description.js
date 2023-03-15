import React, { useState, useContext } from "react";
import cartWhiteImage from "./images/cart-white.svg";
import Cart from "./Cart";
import { CartContext } from "./CartContext";


function Description() {
    const {cartIndicator, setCartIndicator} = useContext(CartContext);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);

    function increaseQuantity() {
        setItemQuantity(itemQuantity + 1);
    }

    function decreaseQuantity() {
        if (itemQuantity === 0) {
            setItemQuantity(itemQuantity);
        }
        else {
            setItemQuantity(itemQuantity - 1);
        }
    }

    function handleClick(){
        setCartQuantity(itemQuantity);
        setCartIndicator(itemQuantity);
    }

    function emptyTrash(){
        setCartQuantity(0);
        setItemQuantity(0);
        setCartIndicator(0);
    }

    return <div className="description">
        <h6>SNEAKER COMPANY</h6>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
            outer sole, they'll withstand everything the weather can offer.</p>
        <div className="pricing">
            <h1 className="new-price">$125.00</h1>
            <h6 className="discount">50%</h6>
            <h6 className="original-price">$250.00</h6>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn " onClick={decreaseQuantity}>-</button>
            <span><h5>{itemQuantity}</h5></span>
            <button type="button" class="btn " onClick={increaseQuantity}>+</button>
        </div>
        <button class="add-to-cart" type="button" onClick={handleClick}>
            <img className="button-cart" src={cartWhiteImage} />  Add to cart</button>
        <Cart quantity={cartQuantity} onEmptied={emptyTrash}/>
    </div>;
}

export default Description;