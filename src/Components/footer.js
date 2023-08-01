import React from 'react'
import "../Css-files/footer.css"
import FooterItems from './footeritems'
import footerlogo from "../Images/footerlogo.png"
import FooterSocial from './footersocial'

function Footer() {
  return (
    <div className='footer'>
       <div className="container">
            <div className="footer-img">
                <img src={footerlogo} alt="" />
            </div>
            <div className="footer-navbar">
                <FooterItems/>
            </div>
            <div className="footer-socials">
                <FooterSocial/>
            </div>
        </div> 
                    
    </div>
  )
}

export default Footer
