import React from 'react'
import './footer.css';
import iconR from '../assets/react.png';
import iconJ from '../assets/js.png';
import iconCss from '../assets/css.png';
import iconPhp from '../assets/php.png';
import iconLaravel from '../assets/laravel.png';
import iconCsharp from '../assets/csharp.png';
import iconCplusplus from '../assets/cplus.png';
import iconPython from '../assets/python.png';



export const Footer = () => {
    return (
        <footer className='footer'>
            <h1 className='name'>cj<span className='dashRed'>-</span>cabral<span className='dashRed'>.</span></h1>

            <p className='centerText'>Tech used:  <img src={iconR} alt="" className='footerLogo' /> <img src={iconJ} alt="" className='footerLogo' />
                <img src={iconCss} alt="" className='footerLogo' /><img src={iconCsharp} alt="" className='footerLogo' />
                <img src={iconCplusplus} alt="" className='footerLogo' /><img src={iconPython} alt="" className='footerLogo' />
                <img src={iconLaravel} alt="" className='footerLogo' /><img src={iconPhp} alt="" className='footerLogo' /></p>

            <p className='rightText'>@2023 All right reserved</p>

        </footer>
    )
}

export default Footer