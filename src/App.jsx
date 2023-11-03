import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import PreLoader from './components/Preloader';
import Home from './Home'




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })



  return (
    <div>
      {isLoading ? (
        <PreLoader />
      ) :
        <div>
          <Navbar />
          <div className='homepage'>
            <Home />
          </div>
        </div>
      }

    </div>
  );
}

export default App;
