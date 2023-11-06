import React, { useEffect } from 'react';
import './experience.css';
import profilePic from '../assets/profile pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Experience = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);


  return (
    <div>
      <div className='alignItems2'>
        <div> <img src={profilePic} alt="profilepic" className='profilePic'  data-aos="fade-right"/></div>
        <div className='alignText3' data-aos="fade-left">
          <div className='profileL'> <FontAwesomeIcon icon={faLocationDot} /> <span className='grayText'>Location:</span> Cainta Rizal, Philippines</div>
          <div className='profileL'> <FontAwesomeIcon icon={faMessage} /> <span className='grayText'>Language:</span> English, Filipino</div>
        </div>
      </div>
      <div className='profileText' data-aos="fade-down">Professional and diligent technician authorized, with a tract record 
        of delivering excellent customer experience and commanding front of house operations for highly 
        regulated environments and high-profile corporate organizations.</div>

<hr  data-aos="flip-right"/>

      <div class="container" data-aos="fade-down">
        <div class="timeline">
          <ul>
            <li >
              <div class="timeline-content">
                <h3 class="date">2023</h3>
                <h1>KodeGo Bootcamp</h1>
                <p className='grayText'>Full-Stack Web Developer </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
              </div>
            </li>
            <li >
              <div class="timeline-content">
                <h3 class="date">2021</h3>
                <h1>Fourpointzero</h1>
                <p className='grayText'>Front-End Designer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">2020</h3>
                <h1>Computer Technician and Dealer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">20th may, 2010</h3>
                <h1>S1 Sage One Global Solution Inc.</h1>
                <p className='grayText'>IT Officer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>


    </div>
  )
}


export default Experience;