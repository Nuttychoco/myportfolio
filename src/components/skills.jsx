import React from 'react'

import UiImg from '../assets/UiImg.png';
import WebDes from '../assets/WebDes.png';
import WriteCode from '../assets/WriteCode.png';
import '../components/skills.css';

export const skills = () => {
    return (
        <section className='skills'>
            <span className='skillTitle'>What I do <br></br></span>
            <span className='skillDesc'>I'am skilled and passionate web
                designer with experience in creating visually appealing and user-friendly wensite. I have a strong understanding of design, and sensitive eye for detail.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UiImg} alt="" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDes} alt="" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>website developer</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WriteCode} alt="" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Writing code</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

            </div>


        </section>
    )   
}
export default skills