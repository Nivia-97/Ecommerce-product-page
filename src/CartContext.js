import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props){
    const [cartClick, setToggleCartClick] = useState(false);
    const [cartIndicator, setCartIndicator] = useState(0);

    return (
        <CartContext.Provider value = {{cartClick, setToggleCartClick, cartIndicator, setCartIndicator}}>
            {props.children}
        </CartContext.Provider>
    );
}