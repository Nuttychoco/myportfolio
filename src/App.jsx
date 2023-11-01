import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar'
import Intro from './components/intro'
import PreLoader from './components/Preloader'
import Skills from './components/skills'
import Carousel from './components/carousel'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })


  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);



  return (
    <div>
      {isLoading ? (
        <PreLoader />
      ) :
        <div>
          <Navbar />
          <Intro />
          <Skills />
          <div data-aos="fade-up">
            <Carousel />
          </div>
        </div>
      }

    </div>
  );
}

export default App;
