import React from 'react'

import UiImg from '../assets/UiImg.png';
import WebDes from '../assets/WebDes.png';
import WriteCode from '../assets/WriteCode.png';
import '../components/skills.css';

export const skills = () => {
    return (
        <section className='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I'am skilled and passionate web
                designer with experience in creating visually appealing and user-friendly wensite. I have a strong understanding of design, and sensitive eye for detail.
            </span>
            <div className="skillBars">
                <div className="skillBar"><div className="img skillBarImg"></div></div>
            </div>


        </section>
    )
}
export default skills