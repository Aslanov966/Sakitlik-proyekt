import React from 'react'
import SpecialTexts from './SpecialTexts'
import "../Css-files/specialoccasion.css"

function SpecialOccasion() {
  return (
    <div className='specials container'>
        <div className="special-head">
            <p className="text-special">Xüsusi təkliflər və endirimlər</p>
        </div>
        <div className="specialblocks">
                <div className="special-box1">
                   <SpecialTexts/>
                </div>
                <div className="special-box2">
                  <SpecialTexts/>
                </div>
                <div className="special-box3">
                  <SpecialTexts/>
                </div>
            </div>
    </div>
  )
}

export default SpecialOccasion
