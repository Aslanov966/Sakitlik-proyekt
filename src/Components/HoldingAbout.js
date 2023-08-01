import React from 'react'
import "../Css-files/about.css";
import holding from "../Images/holding.jpg"
import WhyUs from './WhyUs';
 function HoldingAbout() {
  return (
    <div className="about-section">
        <div className="bg-image">
        </div>
        <div className="container">
            <div className="about-img">
                <img src={holding} alt="" />
            </div>
            <div className="about-texts">
                <p className="about-head">Şirkət haqqında</p>
                <p className="about-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultricies consectetur suscipit est. 
                Amet sit mauris turpis tellus leo. Montes, nulla rhoncus nisl hendrerit amet dolor. 
                <br /> <br />
                Sollicitudin quam pellentesque diam pretium pretium, ultrices eu massa consectetur.
                 Velit accumsan, pharetra, eget maecenas aliquam magna sed aenean.
                </p>
            </div>
        </div>
       
    </div>
  )
}
export default  HoldingAbout;
