import React, { useState, useEffect } from "react";
import './carousel.css'
import end from '../assets/edited.png';


export const CarouselItem = ({ item, width }) => {




  return (

    <div className="carousel-item" style={{ width: width }}>

      <img className="carousel-img" src={item.icon1} />
      <div className="infoText">
        <div className="carouselTitle">{item.title}<hr/></div>
        <div className="carousel-item-text">{item.description}</div>
        <div className="techText">{item.tech}</div>
        <div className="techLogo">{item.techlogo}</div>
      </div>
    </div>

  );
};