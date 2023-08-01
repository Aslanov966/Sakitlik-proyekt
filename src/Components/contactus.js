import React from 'react'
import phone from "../Images/phonecall.png";
import email from "../Images/Mail.png";
import address from "../Images/unvan.png";
import "../Css-files/contactus.css"
import ContactUsData from './contactusdata';
function ContactUs() {
  return (
    <div className="contactus">
        <div className="contactus-head">
         <p className="contactus-head-text">Əlaqə</p>
        </div>
        <div className="container">
            <div className="contact-body">
                <ContactUsData img={phone} head="Telefon" body="+994 51 250 73 30 "/>
                <ContactUsData img={email} head="Email" body="helpdesk@sakitlik.az "/>
                <ContactUsData img={address} head="Ünvan" body="61 Mirzə Mansur küç., Bakı, Azərbaycan "/>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
