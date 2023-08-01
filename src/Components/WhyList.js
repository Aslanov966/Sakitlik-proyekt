import React from 'react'
import "../Css-files/whyus.css";
export default function WhyList( props) {
  return (
    <div className='container'> 
        <div className="list-why">
            <div className="why-list-img">
             <img src={props.img} alt="" />
            </div>
           <p>{ props.body}</p>
        </div>
    </div>
  )
}
