import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar'
import Intro from './components/intro'
import PreLoader from './components/Preloader'





function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })

  return (
    <div>
   { isLoading ? ( 
   <PreLoader/>
   ) : 
      <div>
        <Navbar/>
        <Intro/>
      </div>
   }

    </div>
  );
}
 
export default App;
