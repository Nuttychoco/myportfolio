import React, { useEffect, useState } from 'react'
import './intro.css'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import bg from '../assets/redneon.gif';
import stars from '../assets/stars.gif';
import commet from '../assets/commet.gif';
import laptop from '../assets/laptop.gif';
import astro from '../assets/astro.gif';
import Typewriter from "typewriter-effect";



const MyCv_FILE_URL = 'http://localhost:3000//MyCv.docx';

const Intro = () => {

    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove();
    }

    const [state] = useState({
        title: "Hi, ",
        titleTwo: "I'm ",
        titleThree: "C.J. Cabral",
    });
    return (
        <section className='intro'>
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
                                "Code with Passion,",
                                "Create with Precision.",
                            ],
                        }} />
                </div>
                <div className='contact-me'>
                    <button className='button' onClick={() => { downloadFileAtURL(MyCv_FILE_URL) }}><FontAwesomeIcon icon={faUserTie} /> Download CV</button>
                </div>
                <img src={stars} alt="" className='mypic'/>
                <img src={commet} alt="" className='mypic'/>
                <img src={laptop} alt="" className='mypic'/>
                <img src={commet} alt="" className='mypic'/>
                <img src={astro} alt="" className='mypic'/>
            </div>
        </section>
    )
}

export default Intro;