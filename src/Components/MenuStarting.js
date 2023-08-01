import React from 'react'
import "../Css-files/introduction.css";
import bam from "../Images/smile.png";
import play from "../Images/play-logo.png";

 function MenuStarting() {
  return (
    <div  className='introduct-menu'>
        <div className="container">
            <div className="text-section">
                <p className="text-head">Səs-küy probleminin effektiv həlli <span>bir gündə mənzillərdə *</span></p>
                <p className="text-body"> Öz həyatını yaşa,qonşuların həyatını deyil</p>
                <div className="text-buttons">
                    <button className='price'>Qiymətlər</button>
                    <button className='send-order'>Sifariş göndər</button>
                </div>
                <div className="problems-introduction">
                    <p>Səs-küy problemlərini necə həll etmək olar?</p>
                    <div className="intro-img-play">
                      <img src={play} alt="" />
                    </div>
                </div>
            </div>
            <div className="introduction-img">
                <img src={bam} alt="" />
            </div>

        </div>
      
    </div>
  )
}
export default MenuStarting