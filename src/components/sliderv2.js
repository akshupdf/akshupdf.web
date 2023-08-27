import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../images/img_1.jpg';
import slide_image_2 from '../images/img_8.jpg';
import slide_image_3 from '../images/img_3.jpg';
import slide_image_4 from '../images/img_4.jpeg';
import slide_image_5 from '../images/img_5.jpg';
import slide_image_6 from '../images/img_6.jpg';
import slide_image_7 from '../images/img_7.jpg';
import slide_image_8 from '../images/img_8.jpg';
import slide_image_9 from '../images/img_9.jpg';
import slide_image_10 from '../images/img_12.jpg';
import slide_image_11 from '../images/img_13.jpg';
import slide_image_12 from '../images/img_14.jpg';
import slide_image_13 from '../images/img_16.jpg';

const ImageSliderV2 = () => {
  
return (
    <div className='w-auto h-auto lg:inline-block sm:grid'>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 25,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
          dynamicBullets: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-[42rem] text-xl mx-auto w-[100%] flex justify-center swiper-slide "
      >
        <SwiperSlide >
          <img src={slide_image_1} alt="slide_image" className='w-[37rem] h-[42rem] border-2  object-cover p-10' />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" className='w-[55rem] h-[42rem] border-2 object-cover'/>
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" className='w-[37rem] h-[42rem] border-2 object-cover p-10'/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" className='w-[37rem] h-[42rem] border-2 object-cover'/>
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" className='w-[37rem] h-[42rem] border-2 object-cover p-10'/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" className='w-[57rem] h-[42rem] border-2 object-cover'/>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" className='w-[67rem] h-[42rem] border-2 object-cover p-10'/>
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" className='w-[57rem] h-[42rem] border-2 object-cover p-10'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" className='w-[57rem] h-[42rem] border-2 object-cover p-10'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" className='w-[57rem] h-[42rem] border-2 object-cover p-10'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" className='w-[57rem] h-[42rem] border-2 object-cover p-10'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" className='w-[57rem] h-[42rem] border-2 object-cover p-10'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slide_image" className='w-[57rem] h-[42rem] border-2 object-cover p-10'/>
        </SwiperSlide>
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
)
};

export default ImageSliderV2;