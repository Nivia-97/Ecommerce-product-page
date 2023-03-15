import React from "react";
import NavigationBar from "./NavigationBar";
import Main from "./Main";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <>
        <NavigationBar />
        <Main />
      </>
    </CartProvider>
  );
}

export default App;
