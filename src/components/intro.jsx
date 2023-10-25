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
        titleTwo: "I'm ",
        titleThree: "Chris Jhovin",
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
                            delay: 60,
                            strings: [
                                "Coding Is My Passion,",
                                "Came From Nothing To Something.",
                            ],
                        }} />
                </div>
                <div className='contact-me'>
                    <button className='button'><FontAwesomeIcon icon={faBriefcase} /> Hire Me!</button>

                </div>

            </div>

            <img src={bg} alt="" className='bg' />

            <img src={mypic} alt="" className='mypic moving' />


        </section>
    )
}

export default Intro;