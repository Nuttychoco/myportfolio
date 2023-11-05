import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import PreLoader from './components/Preloader'
import logo from '../src/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Home from './Pages/Home';
import Project from './Pages/Project'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'
import ErrorPage from "./Pages/ErrorPage";
import Footer from './components/footer';

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
          <Router>
            <nav className="navbar">
              <div>
                <NavLink to="/">
                 <div className='cjText'> cj<span className='yellowText3'>-</span>cabral<span className='yellowText3'>.</span></div>
                  <div className='seText'>
                    Software Engineer
                  </div>
                </NavLink>

              </div>
              <div className="desktopMenu">
                <NavLink to="/project" className='desktopMenuListItem' >Project</NavLink>
                <NavLink to="/experience" className='desktopMenuListItem' >Experience</NavLink>
                <NavLink to="/contact" className='desktopMenuListItem' >Contact</NavLink>
              </div>
              <div>
                <FontAwesomeIcon className='icons' icon={faGithub} />
                <FontAwesomeIcon className='icons' icon={faPhone} />
              </div>
            </nav>

            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>

              <Footer />
            </div>
          </Router>
        </div>
      }

    </div>
  );
}

export default App;
