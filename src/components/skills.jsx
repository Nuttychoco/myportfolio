import React, { useEffect } from 'react'

import UiImg from '../assets/UiImg.png';
import WebDes from '../assets/WebDes.png';
import WriteCode from '../assets/WriteCode.png';
import '../components/skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import iconcplus from '../assets/cplus.png';
import iconcsharp from '../assets/csharp.png';
import iconchtml from '../assets/html.png';
import iconcss from '../assets/css.png';
import iconJs from '../assets/js.png';
import iconReact from '../assets/react.png';
import iconcphp from '../assets/php.png';
import iconclaravel from '../assets/laravel.png';
import iconsql from '../assets/mysql.png'



const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <section className='skills'>
            <span className='skillTitle'>What I do <br></br></span>
            <span className='skillDesc' data-aos="fade-up">Proficient in an assortment of technologies, including <img src={iconcplus} alt="" className='skillsLogo' />C++, <img src={iconcsharp} alt="" className='skillsLogo' />C#, <img src={iconchtml} alt="" className='skillsLogo' />HTML5, <img src={iconcss} alt="" className='skillsLogo' />CSS3, <img src={iconJs} alt="" className='skillsLogo' />Javascript, <img src={iconReact} alt="" className='skillsLogo' />React Js, <img src={iconcphp} alt="" className='skillsLogo' />PHP, <img src={iconclaravel} alt="" className='skillsLogo' />Laravel, and <img src={iconsql} alt="" className='skillsLogo' />MySQL. Able to efficiently self-manage during independent projects, as well as collaborate in a team setting.
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
                        <p>I'm proficiency in front-end Html or frameworks like React for building interactive web applications and i'll make sure it has Responsive web design to ensure websites work well on various devices and screen sizes.</p>
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