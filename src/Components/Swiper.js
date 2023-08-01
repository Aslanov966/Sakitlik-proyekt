import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import home1 from "../Images/home1.png"
import home2 from "../Images/home2.jpg"
import home3 from "../Images/home3.jpg"
import "../Css-files/instagram-feed.css";
import InstaFeedSocialIcons from './instafeedsocialicons';
export default () => {
  return (
    <div className="instagram-feed">
      <h1 className='feed-head'>Instagram feed</h1>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={20}  slidesPerView={4} 
      navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }} onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className='swiper-core'>
          <img src={home2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-core'>
          <img src={home3}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-core'>
          <img src={home2}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-core'>
          <img src={home3}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-core'>
          <img src={home2}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-core'>
          <img src={home3} />
        </SwiperSlide>
        <SwiperSlide className='swiper-core'>
          <img src={home2}/>
        </SwiperSlide> 
    </Swiper>
    <InstaFeedSocialIcons/>
    </div>
    
    
  );
};