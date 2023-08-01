import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../Css-files/videos.css"

function Videos() {
  return (
    <div className='videos'>
       <div className="container">
         <div className="video-text">
             <p className="video-head">Videolar</p>
         </div>
           <div className="video-lists">
                 <Swiper  spaceBetween={30} slidesPerView={3} onSlideChange={() => console.log('slide change')}  onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                       <div className="video">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/ue2_A6VAfa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="video">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/ue2_A6VAfa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="video">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/oQaZy3JkgeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="video">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/YzaRsOWVMzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       </div>
                    </SwiperSlide>
   
                    <SwiperSlide>
                       <div className="video">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/WQsVu2GCGVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="video">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/W1R3s7mpuqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="video">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/ue2_A6VAfa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="video">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/ue2_A6VAfa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="video">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/oQaZy3JkgeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       </div>
                    </SwiperSlide>
       
                </Swiper>
            </div>    
        </div>
    </div>
  )   
}   

export default Videos
