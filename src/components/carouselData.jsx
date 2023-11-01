import React, { useState, useEffect } from "react";
import './carousel.css'
import end from '../assets/edited.png';


export const CarouselItem = ({ item, width }) => {




  return (
    
      <div className="carousel-item" style={{ width: width }}>
        <div></div>
        <img className="carousel-img" src={item.icon} />
        <div className="carousel-item-text">{item.description}</div>
      </div>
    
  );
};