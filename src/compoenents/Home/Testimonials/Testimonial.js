import React from 'react'
import "./Testimonial.css"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Testimonial = () => {
    return (
        
<div className="testim">
  <h1>Testimonials</h1>
  <div className="container">
    
      <div className="testim-content">
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="testim-box">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure non reiciendis reprehenderit? Dicta eaque illo ut beatae alias quod, distinctio ad, asperiores vitae culpa qui nisi rerum debitis modi.</p>
        <div className="testim-box-content">
         {/* <img src="https://i.postimg.cc/rpRQv1sc/3.jpg" alt="" /> */}
          <h3>Person name</h3>
          <p>Desiginition</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="testim-box">

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure non reiciendis reprehenderit? Dicta eaque illo ut beatae alias quod, distinctio ad, asperiores vitae culpa qui nisi rerum debitis modi.</p>
<div className="testim-box-content">
  {/* <img src="https://i.postimg.cc/rpRQv1sc/3.jpg" alt="" /> */}
  <h3>Person Name</h3>
  <p>desigination</p>
</div>
</div>

      </SwiperSlide>
      <SwiperSlide> <div className="testim-box">
  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure non reiciendis reprehenderit? Dicta eaque illo ut beatae alias quod, distinctio ad, asperiores vitae culpa qui nisi rerum debitis modi.</p>
  <div className="testim-box-content">
    {/* <img src="https://i.postimg.cc/rpRQv1sc/3.jpg" alt="" /> */}
    <h3>Person Name</h3>
    <p>Desiginition</p>
  </div>
</div>
</SwiperSlide>
      <SwiperSlide>
      <div className="testim-box">
  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure non reiciendis reprehenderit? Dicta eaque illo ut beatae alias quod, distinctio ad, asperiores vitae culpa qui nisi rerum debitis modi.</p>
  <div className="testim-box-content">
    {/* <img src="https://i.postimg.cc/rpRQv1sc/3.jpg" alt="" /> */}
    <h3>Person Name</h3>
    <p>Desiginition</p>
  </div>
</div>

      </SwiperSlide>
      
    </Swiper>
        
     
      
        </div>
  </div>
</div>

        
    )
}

export default Testimonial
