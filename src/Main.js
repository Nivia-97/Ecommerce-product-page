import React from "react";
import ProductDisplay from "./ProductDisplay";
import Description from "./Description";


function Main() {
    return <>
        <div className="row grid-main-desktop">
            <div className="col-lg-6 grid-item grid-item-1">
                <ProductDisplay />
            </div>
            <div className="col-lg-6 grid-item">
                <Description />
            </div>
        </div>
    </>;
}

export default Main;