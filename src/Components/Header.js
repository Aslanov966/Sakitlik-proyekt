import React from 'react';
import '../Css-files/header.css';
import logo from '../Images/Frame.png';
import phone from '../Images/call-icon.png';
import mail from '../Images/mail-icon.png';
import aze from '../Images/flag-round-250.png';
import dawn from '../Images/dawn icon.png';
import cinekon from '../Images/cinekon-icon.png'
export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="logo-img">
                <img src={logo} alt="" />
            </div>
           
                <ul className='phone'>
                    <li>
                       <img src={phone}alt="" className='imgs' />
                        <a> +994 51 250 73 30</a>
                    </li>
                    <li>
                        <img src={mail} alt=""  className='imgs'/>
                        <a>helpdesk@sakitlik.az</a>
                    </li>
               </ul>
            <div className="language-header">
                <img src={aze}style={{width:18,height:18}} alt="" />
                <p>Az</p>
                <img src={dawn} alt="" />
            </div>
            <div className="cinekon-img">
             <img src={cinekon} alt="" />
            </div>
        </div>
    </header>
  )
}
