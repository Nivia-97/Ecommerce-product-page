import React, { useContext, useState } from "react";
import cartImage from "./images/icon-cart.svg";
import profileImage from "./images/image-avatar.png";
import hamburger from "./images/icon-menu.svg"
import logo from "./images/logo.svg"
import { CartContext } from "./CartContext";


function NavigationBar() {

  const { cartClick, setToggleCartClick } = useContext(CartContext);
  const {cartIndicator, setCartIndicator} = useContext(CartContext);

  return <div>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="nav-toggle-left-items">
          <button className="navbar-toggler hamburger-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span><img src={hamburger} /></span>
          </button>
          <img className="logo" src={logo} />
        </div>
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 pe-3 ">
              <li className="nav-item">
                <a className="nav-link" href="#">Collections</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-toggle-right-items">
          <button className="cart-button" onClick={() => setToggleCartClick(!cartClick)}><img className="cart" src={cartImage} />
            {cartIndicator>0 && <span class="position-absolute top-0 start-100 translate-middle badge cart-indicator">
              {cartIndicator}
              <span class="visually-hidden">unread messages</span>
            </span>}
          </button>
          {/* {isClicked && <Cart />} */}
          <img className="profile" src={profileImage} />
        </div>
      </div>
    </nav>
    <hr className="navbar-end" />
  </div >;
}

export default NavigationBar;