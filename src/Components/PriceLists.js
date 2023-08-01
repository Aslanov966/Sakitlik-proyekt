import React from 'react'
import priceperson from "../Images/priceslist.png"
 import submiticon from "../Images/submiticon.png"
function PriceLists() {
  return (
    <div className='pricelists'>
      <div className="pricelist-head">
        <img src={priceperson} alt="" />
        <p className="pricelist-head-text">Döşəmənin səs və vibro izolyasiyası</p>
        <p className="pricelist-price">61,90 AZN/m2 <br /> başlayaraq</p>
      </div>
      <div className="pricelist-list">
        <div className="submits">
          <img src={submiticon}/>
          <p className='price-list-p'> Снижение воздушного шума в 2 раза</p>
        </div>
        <div className="submits">
          <img src={submiticon}/>
          <p className='price-list-p'>Устранение ударного шума от топота, падения предметов</p>
        </div>        
        <div className="submits">
          <img src={submiticon}/>
          <p className='price-list-p'>Суммарная звукоизоляция до 60 дБ</p>
        </div>       
         <div className="submits">
          <img src={submiticon}/>
          <p className='price-list-p'>Толщина от 2,5 см</p>
        </div>
      </div>
      <button>Sifariş et</button>
    </div>
  )
}

export default PriceLists
