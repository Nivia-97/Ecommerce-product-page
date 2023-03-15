import React, { useState } from "react";
import Carousel from "./Carousel";

import item1ThumbImage from "./images/image-product-1-thumbnail.jpg";
import item2ThumbImage from "./images/image-product-2-thumbnail.jpg";
import item3ThumbImage from "./images/image-product-3-thumbnail.jpg";
import item4ThumbImage from "./images/image-product-4-thumbnail.jpg";

import item1 from "./images/image-product-1.jpg";
import item2 from "./images/image-product-2.jpg";
import item3 from "./images/image-product-3.jpg";
import item4 from "./images/image-product-4.jpg";


function ProductDisplay() {
    const [productImage, setProductImage] = useState(item1);
    const isMobile = window.innerWidth <= 700;

    function displayProductImage1() {
        setProductImage(item1);
    }

    function displayProductImage2() {
        setProductImage(item2);
    }

    function displayProductImage3() {
        setProductImage(item3);
    }

    function displayProductImage4() {
        setProductImage(item4);
    }

    return <>
        {/* Desktop product display */}
        <button className="desktop-product-display" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src={productImage} height="425px" width="410px" />
        </button>


        {/* Modal start */}

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="d-flex justify-content-end">
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close-button">x</button>
                        </div>
                        <div class="container-fluid ">
                            <div class="row">
                                <div class="col">
                                    {!isMobile && <Carousel className="desktop-carousel" />}
                                </div>
                            </div>
                            {/* <div class="row">
                                <div class="col">
                                    <div className="thumb-image-desktop">
                                        <button onClick={displayProductImage1} className="image-button" type="button"><img className="image-thumb" src={item1ThumbImage} /></button>
                                        <button onClick={displayProductImage2} className="image-button" type="button"><img className="image-thumb" src={item2ThumbImage} /></button>
                                        <button onClick={displayProductImage3} className="image-button" type="button"><img className="image-thumb" src={item3ThumbImage} /></button>
                                        <button onClick={displayProductImage4} className="image-button" type="button"><img className="image-thumb" src={item4ThumbImage} /></button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Modal end */}

        {isMobile && <Carousel />}
        <div className="thumb-image-desktop">

            <div className="image-button-div">
                <button onClick={displayProductImage1} className="image-button" type="button">
                    <img className="image-thumb" src={item1ThumbImage} />
                </button>
            </div>

            <div className="image-button-div">
                <button onClick={displayProductImage2} className="image-button" type="button">
                    <img className="image-thumb" src={item2ThumbImage} />
                </button>
            </div>

            <div className="image-button-div">
                <button onClick={displayProductImage3} className="image-button" type="button">
                    <img className="image-thumb" src={item3ThumbImage} />
                </button>
            </div>

            <div className="image-button-div">
                <button onClick={displayProductImage4} className="image-button" type="button">
                    <img className="image-thumb" src={item4ThumbImage} />
                </button>
            </div>

        </div>
    </>;
}

export default ProductDisplay;