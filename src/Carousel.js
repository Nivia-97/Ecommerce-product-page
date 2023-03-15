import React from "react";
import item1 from "./images/image-product-1.jpg";
import item2 from "./images/image-product-2.jpg";
import item3 from "./images/image-product-3.jpg";
import item4 from "./images/image-product-4.jpg";
import prev from "./images/icon-previous.svg";
import next from "./images/icon-next.svg";



function Carousel() {
  
  return <>
    <div id="carouselExample" className="carousel slide ">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={item1} className="d-block w-100 desktop-carousal-img" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={item2} className="d-block w-100 desktop-carousal-img" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={item3} className="d-block w-100 desktop-carousal-img" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={item4} className="d-block w-100 desktop-carousal-img" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="button-prev" aria-hidden="true"><img src={prev} /></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="button-next" aria-hidden="true"><img src={next} /></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </>;
}

export default Carousel;