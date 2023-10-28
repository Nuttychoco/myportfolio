import React, { useEffect, useState } from 'react'

import UiImg from '../assets/UiImg.png';
import WebDes from '../assets/WebDes.png';
import WriteCode from '../assets/WriteCode.png';
import '../components/skills.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <section className='skills'>
            <span className='skillTitle'>What I do <br></br></span>
            <span className='skillDesc' data-aos="fade-up">I'am skilled and passionate web
                designer with experience in creating visually appealing and user-friendly wensite. I have a strong understanding of design, and sensitive eye for detail.
            </span>
            <div className="skillBars">
                <div className="skillBar" data-aos="fade-up">
                    <img src={UiImg} alt="" className='skillBarImg' />
                    <div className='skillBarText' >
                        <h2>UI/UX Design</h2>
                        <p>Understanding the needs, goals, and behaviors of your target audience through techniques like user interviews, surveys, and usability testing for UX Organizing and structuring content and functionality in a logical and user-friendly way.  </p>
                    </div>
                </div>
                <div className="skillBar" data-aos="flip-right">
                    <img src={WebDes} alt="" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Website Developer</h2>
                        <p>I'am proficiency in front-end Html or frameworks like React for building interactive web applications and i'll make sure it has Responsive web design to ensure websites work well on various devices and screen sizes.</p>
                    </div>
                </div>
                <div className="skillBar" data-aos="flip-left">
                    <img src={WriteCode} alt="" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Desktop App Developer</h2>
                        <p>I used Visual Basic of the .NET framework because it offers a user-friendly and intuitive way to create desktop applications.</p>
                    </div>
                </div>

            </div>


        </section>
    )
}
export default Skills;