import React, { useContext } from "react";
import productImage from "./images/image-product-1-thumbnail.jpg";
import trashButton from "./images/icon-delete.svg";
import { CartContext } from "./CartContext";

function Cart(props) {
    const {cartClick, setToggleCartClick} = useContext(CartContext);
    const quantity = props.quantity;
    
    return <div className="cartbox" style = {{display : cartClick? "block" : "none"}}>
        <h6 className="cartbox-heading">Cart</h6>
        <hr className="cartbox-division" />
        {quantity === 0 ? <h6 className="empty-cartbox-content">Your cart is empty.</h6>:
        <div className="cartbox-content">
            <div className="col-cart "><img className="cart-img" src={productImage}
                width="60" height="60" /></div>
            <div className="col-cart cart-product-detail">
                <p>Fall Limited Edition Sneakers<br />$125.00 x {quantity} &nbsp;<strong style={{color:"black"}}>${125 * quantity}.00</strong></p>
            </div>
            <button className="col-cart trash-button" onClick={props.onEmptied}><img src={trashButton} /></button>
            <button className="checkout-button">Checkout</button>
        </div>}
    </div>;
}

export default Cart;