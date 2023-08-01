import React from 'react'
import "../Css-files/customers.css"
 function Customers(props) {
  return (
    <div className='customers-lists'>
        <p className="customer-text">{props.text}</p>
        <p className="customer-number">{props.number}</p>
    </div>
  )
}
export default Customers