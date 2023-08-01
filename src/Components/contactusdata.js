import React from 'react'
import "../Css-files/contactus.css"
function ContactUsData(props) {
  return (
    
    <div className='contactusdatas'>
      <div className="contactusdata">
        <div className="contactusdata-img">
          <img src={props.img} alt="" />
        </div>
            <p className="contact-phn-head">{props.head}</p>
            <p className="contact-phn-body">{props.body} </p>
        </div>
    </div>
  )
}

export default ContactUsData
