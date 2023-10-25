import React, { useEffect, useState } from 'react'
import './intro.css'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import bg from '../assets/redneon.gif';
import mypic from '../assets/edited.png';
import Typewriter from "typewriter-effect";


const Intro = () => {

    const [state] = useState({
        title: "Hi, ",
        titleTwo: "I'm",
        titleThree: "Code&Coding",
    });
    return (
        <section>
            <div className="home-intro">
                <h2>
                    <div className="title">{state.title} </div>
                    <div className="titleTwo">{state.titleTwo} </div>
                    <div className="titleThree">{state.titleThree} </div>
                </h2>
                <div className='text'>
                    <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: [
                            "I'm a Pogi",
                            "I'm a Web Developer",
                            "I'm a Tech Enthusiast",
                        ],
                    }}/>

                </div>
            </div>

            <img src={bg} alt="" className='bg' />

            <img src={mypic} alt="" className='mypic moving' />


        </section>
    )
}

export default Intro;