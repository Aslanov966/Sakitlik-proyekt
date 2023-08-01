import React from 'react'
import "../Css-files/calculator.css"

 function ApartmantTypes(props) {
  return (
    <div className='types'>
       <input type="checkbox" name="" id="" /> &nbsp;
       <label>{props.title}</label>
    </div>
  )
}
export default ApartmantTypes
