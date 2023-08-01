import React from 'react'
import "../Css-files/calculator.css"


 function RoomSize() {
  return (
    <div className='roomsize'>
       <input type="text" placeholder='Uzunluğu (L1), m' />
       <input type="text" placeholder='Eni (L2), m' />
       <input type="text" placeholder='Hündürlüyü (H1), m' />

    </div>
  )
}
export default RoomSize