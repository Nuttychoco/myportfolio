import './Home.css';
import React, { useEffect, useState } from 'react';
import Intro from '../components/intro';
import Skills from '../components/skills';
import Carousel from '../components/carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/footer';



function Home() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);



  return (
    <div>

      <div>
        <div className='homepage'>
          <Intro />
          <Skills />
          <div data-aos="fade-up">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;