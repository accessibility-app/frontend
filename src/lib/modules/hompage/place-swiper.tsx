import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle";
import { register } from "swiper/element/bundle";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaStreetView } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

register();

const PlaceSwiper = () => {
    const navigate = useNavigate()
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
        // autoplay={{ delay: 8000 }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper pb-6"
      >
        <SwiperSlide className="w-[300px] h-[300px] bg-cover">
          <div>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-full h-[230px]"
            />
            <div className="bg-white h-[70px] p-2" onClick={() => navigate('/place/34566')}>
              <p className="fw-600">Rectice Library</p>
              <p className="flex gap-x-2 items-center text-primary cursor-pointer underline">
                <FaStreetView  className="text-primary"/>
                <span className="cursor-pointer">View</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[300px] bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[300px] bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[300px] bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[300px] bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[300px] bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[300px] bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[300px] bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] h-[300px] bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PlaceSwiper;
