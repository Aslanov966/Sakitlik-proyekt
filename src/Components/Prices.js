import React from 'react'
import PriceLists from './PriceLists'
import "../Css-files/prices.css"

function Prices() {
  return (
    <div className='container'>
      <div className="prices">
        <div className="prices-head">
          <p className="price-head">Qiymətlər</p>
        </div>
        <div className="prices-body">
          <div className="pricelists-core">
            <PriceLists/>
          </div>
          <div className="pricelists-core">
            <PriceLists/>
          </div>
          <div className="pricelists-core">
            <PriceLists/>
          </div>
          <div className="pricelists-core">
            <PriceLists/>
          </div>

        </div>
      </div>     
    </div>
  )
}

export default Prices
