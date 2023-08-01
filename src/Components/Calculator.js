import React from 'react'
import RoomSize from './roomsize'
import "../Css-files/calculator.css"
import ApartmantTypes from './apartmantstypes'
import cube from "../Images/cube-calculator.png"
import NotesAndContact from './notesandcontact'

function Calculator() {
  return (
    <div className='calculator'>
        <div className="container">
            <div className="calculator-items">
               <div className="calculator-texts">
                 <p className="calculator-head">Kalkulator</p>
                 <p className="calculator-text">Hesablama pulsuzdur. 1 iş günü ərzində nəticə. Hesablama təxminidir. Dəqiq hesablama üçün sayğacın ayrılması  lazımdır.</p>
               </div>
               <div className="room-sizers">
                 <p className="room-size-head">Otaq ölçülərini daxil edin </p>
                 <RoomSize/>
               </div>
               <div className="apartmant-types">
                   <p className="apartmant-head">Mənzil növləri</p>
                   <div className="apartmants">
                      <ApartmantTypes title=" Yeni tikili"/>
                      <ApartmantTypes title=" Panel"/>
                      <ApartmantTypes title=" Kərpic"/>
                      <ApartmantTypes title=" Fərdi yaşayış"/>
                   </div>
               </div>
               <div className="izolations">
                <p className="izolation-head">İzolyasiya olunacaq səthlər</p>
                <div className="izolations-checkboxes">
                      <ApartmantTypes title=" Divar"/>
                      <ApartmantTypes title=" Tavan"/>
                      <ApartmantTypes title=" Arakəsmə"/>
                      <ApartmantTypes title=" Döşəmə"/>
                      <ApartmantTypes title=" Digər"/>
                   </div>
               </div>
               <div className="notes">
                    <NotesAndContact/>
               </div>
            </div>
            <div className="calculator-image">
                <img src={cube} alt="" />
            </div>
          
        </div>
       
    </div>
  )
}
export default  Calculator
