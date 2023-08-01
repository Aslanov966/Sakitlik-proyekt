import React from 'react'
import "../Css-files/footer.css"
import footerfcb from "../Images/footerfb.png"
import footerinsta from "../Images/footerinsta.png"
import footerlink from "../Images/footerlink.png"
import footertg from "../Images/footertg.png"
import footeryt from "../Images/footeryt.png"

function FooterSocial() {
  return (
    <div className='footer-social'>
        <div className="socials">
            <img src={footerfcb} alt="" />
        </div>
        <div className="socials">
            <img src={footerinsta} alt="" />
        </div>
        <div className="socials">
            <img src={footerlink} alt="" />
        </div>
        <div className="socials">
            <img src={footertg} alt="" />
        </div>
        <div className="socials">
            <img src={footeryt} alt="" />
        </div>
      
    </div>
  )
}

export default FooterSocial
