import React from 'react';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Swiper: React.FC = () => {
    return (
        <SwiperContainer
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </SwiperContainer>
    );
}
