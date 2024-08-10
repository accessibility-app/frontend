import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle";
import { register } from "swiper/element/bundle";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

register()

const PlaceSwiper = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='w-[400px] h-[300px] bg-cover'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-[400px] h-[300px] bg-cover'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-[400px] h-[300px] bg-cover'>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-[400px] h-[300px] bg-cover'>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-[400px] h-[300px] bg-cover'>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-[400px] h-[300px] bg-cover'>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-[400px] h-[300px] bg-cover'>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-[400px] h-[300px] bg-cover'>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-[400px] h-[300px] bg-cover'>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PlaceSwiper;
