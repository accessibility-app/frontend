import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/element/css/effect-fade';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaStreetView } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { places } from '../../data/places';

register();

const PlaceSwiper = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 8000 }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper pb-6'
      >
        {places.map((item) => (
          <SwiperSlide className='w-[300px] h-[325px] bg-cover'>
            <div>
              <img
                src={item.picture}
                className='w-full h-[230px] object-cover'
              />
              <div
                className='bg-white h-[95px] p-2'
                onClick={() => navigate(`/place/${item.id}`)}
              >
                <p className='fw-600'>{item.name}</p>
                <p className='flex gap-x-2 items-center text-primary cursor-pointer underline'>
                  <FaStreetView className='text-primary' />
                  <span className='cursor-pointer'>View</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlaceSwiper;
