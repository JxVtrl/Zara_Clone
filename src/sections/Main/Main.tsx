import React from 'react';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import { Swiper } from '../../components'
// import { Container } from './styles';

export const Main: React.FC = () => {
  return (
    <SwiperContainer
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>

      </SwiperSlide>
      <SwiperSlide>

      </SwiperSlide>
      <SwiperSlide>

      </SwiperSlide>
    </SwiperContainer>
  );
}
