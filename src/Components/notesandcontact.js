import React from 'react'
import "../Css-files/calculator.css"
function NotesAndContact() {
  return (
    <div className='notes-contact'>
        <div className="notes">
            <p className="notes-head">Qeydlər</p>
            <input type="text" name="" id="" />
        </div>
        <div className="contact-calculator">
            <p className="contact-calculator-head">Əlaqə məlumatları</p>
             <div className="contacts-inputs">
                <input type="tel"  placeholder='Telefon' />
                <input type="email" placeholder='Email' />
             </div>
        </div>
        <div className="notesbtn">
            <button>Hesabla</button>
        </div>
      
    </div>
  )
}

export default NotesAndContact
