import React, { useEffect } from 'react';
import './allProjects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Kndt from '../assets/Kndt.PNG';
import iconVb from '../assets/visualBasic.png';
import iconcsharp from '../assets/csharp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import GS from '../assets/Guard.PNG';





const AllProjects = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);


  return (
    <section className='AllProjects'>
      <div className='recentProject'>

        <div className='project1' data-aos="fade-left">
          <div>
            <img src={Kndt} alt="" className='projectimg1' />
          </div>
          <div className='projectGroupText'>
            <h1 className='imgTitle'>KNDT Arabia</h1>
            <div className='suppText1'>Inventory App </div>
            <div className='desText'>Static, Multi-page Application and SQL driven.</div>
            <div className='techText1'>Tech Used: <img src={iconVb} alt="" className='iconText' /> <img src={iconcsharp} alt="" className='iconText' /> </div>
            <div className='buttons'>
              <a href="https://drive.google.com/drive/folders/1aAQXV5_2rv5ATjS6N4o-ZWmnXUodQ2bQ?usp=drive_link" target="_blank"
                rel="noopener noreferrer">
                <button className='buttonProject'> <FontAwesomeIcon icon={faDownload} /> Download</button>
              </a>
            </div>
          </div>

        </div>

        <div className='hralign'>
          <hr className='hr1' data-aos="flip-right" />
        </div>
        <div className='project1' data-aos="fade-right">
          <div>
            <img src={GS} alt="" className='projectimg1' />
          </div>
          <div className='projectGroupText'>
            <h1 className='imgTitle'>Guard Seraphim</h1>
            <div className='suppText1'>Inventory App </div>
            <div className='desText'>Static, Multi-page Application</div>
            <div className='techText1'>Tech Used: <img src={iconVb} alt="" className='iconText' /> <img src={iconcsharp} alt="" className='iconText' /> </div>

            <div className='buttons'>
              <a href="https://github.com/Nuttychoco/https---github.com-Nuttychoco-Guard-Seraphim" target="_blank"
                rel="noopener noreferrer">
                <button className='buttonProject'> <FontAwesomeIcon icon={faGithub} /> Github repository</button>
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default AllProjects;