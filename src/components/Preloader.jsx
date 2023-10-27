import React, { useEffect, useState } from 'react';
import './preloader.css';
import loaderImg from '../assets/preloader.gif';






const PreLoader = () => {

  return (
    <div>
      <div className='preloader'>
        <img src={loaderImg} alt="" className='loaderImg' />
      </div>
    </div>
  );
}

export default PreLoader;