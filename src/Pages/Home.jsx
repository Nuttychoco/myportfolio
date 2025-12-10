import './Home.css';
import React, { useEffect, useState } from 'react';
import Intro from '../components/intro';
import Skills from '../components/skills';
import Carousel from '../components/carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/footer';
import comment from '../assets/comment.png';



function Home() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);



  return (
    <div>
      <div className='homepage'>
        <Intro />
        <Skills />
      </div>
      <div data-aos="fade-up">
        <Carousel />
      </div>
      <div className='fade-up'>
        <img src={comment} alt="" className='comments' />
      </div>
    </div>

  );
}

export default Home;
