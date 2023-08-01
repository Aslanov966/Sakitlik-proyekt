import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../Css-files/partnyors.css"
import cinekon from "../Images/cinekon.png";
import twentylet from "../Images/twentylet.jpg"
function Partnyors() {
  return (
    <div className='partnyors'>
      <div className="container">
        <div className="partnyor-text">
            <p className="partnyor-head">Partnyorlar</p>
        </div>
          <div className="partnyor-lists">
                <Swiper  spaceBetween={30} slidesPerView={4} onSlideChange={() => console.log('slide change')}  onSwiper={(swiper) => console.log(swiper)}>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={cinekon} alt="" />
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={twentylet} alt="" />
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={cinekon} alt="" />
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={twentylet} alt="" />
                      </div>
                   </SwiperSlide>

                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={cinekon} alt="" />
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={twentylet} alt="" />
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={cinekon} alt="" />
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={twentylet} alt="" />
                      </div>
                   </SwiperSlide>


                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={cinekon} alt="" />
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={twentylet} alt="" />
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={cinekon} alt="" />
                      </div>
                   </SwiperSlide>
                   <SwiperSlide>
                      <div className="partnyor">
                         <img src={twentylet} alt="" />
                      </div>
                   </SwiperSlide>
      
                </Swiper>
            </div>    
        </div>
    </div>
  )
}

export default Partnyors
