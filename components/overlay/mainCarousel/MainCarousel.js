import Image from 'next/image';
import { useRef, useState } from 'react';
import tw from 'twin.macro';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { faker } from '@faker-js/faker'
import { css } from '@emotion/react' 


const MainCarousel = (props) => {

  const { slides } = props;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const pageRef = useRef(null);

  SwiperCore.use([Pagination, Navigation, Autoplay]);

  const swiperParams = {
    loop: true,
    onSwiper: (swiper) => console.log(swiper),
    spaceBetween: 0,
    autoplay: true,
    slidesPerView: 3,
    watchOverflow: true,
    centeredSlides: true,
    loopAdditionalSlides: 1,
    navigation: {prevEl: prevRef.current, nextEl: nextRef.current},
    pagination: { clickable: true, type: 'bullets'},
    breakpoints: {
      320: {slidesPerView: 1},
      768: {slidesPerView: 1.25},
      1024: {slidesPerView: 3}
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }

  return (
  <div tw="w-full relative flex flex-col items-center py-2">
    <div tw="relative w-full overflow-hidden px-0 flex justify-center mx-auto">
      <Swiper tw="relative max-w-[1970px] h-[240px] sm:(min-w-[calc((3 * 480px) + (3 * 20px))]) md:(min-w-[calc((3 * 500px) + (3 * 20px))]) lg:(min-w-[calc((3 * 700px) + (3 * 20px))])"
      {...swiperParams}
    >
      {slides.map((slide, i) => (       
        <SwiperSlide key={i} style={{height:"inherit", margin:[0, "auto"], display:"flex", justifyContent:"center"}}>
          <div tw="min-w-[284px] min-h-[218px] sm:(w-[480px]) md:w-[500px] lg:(w-[700px] px-[10px]) w-full px-4 rounded-xl overflow-hidden">
            <img tw="block w-full h-full px-1 lg:px-4 object-cover object-center" src={faker.image.urlPicsumPhotos({width:700, height:240, category:"romance"})} alt={`캐러셀${i}`} />  
          </div>                      
        </SwiperSlide>
      ))}
      </Swiper>
      <div tw="absolute w-full h-20 flex justify-between items-center top-1/3 z-20">
        <button
        ref={prevRef}
        type="button"
        tw="relative min-w-fit w-12 h-full p-3 hover:bg-gray-50 text-gray-400 md:hover:(bg-[rgba(255,255,255,0.7)]) lg:hover:(bg-transparent text-sky-500) rounded-full lg:rounded-none"
        >
          <HiChevronLeft tw="w-12 h-12 text-gray-400 hover:lg:text-sky-500"/>
        </button>
        <button
        ref={nextRef}
        type="button"
        tw="relative min-w-fit w-12 h-full p-3 hover:bg-gray-50 text-gray-400 md:hover:(bg-[rgba(255,255,255,0.7)]) lg:hover:(bg-transparent text-sky-500) rounded-full lg:rounded-none"
        >
          <HiChevronRight tw="w-12 h-12"/>
        </button>
      </div>
    </div>
  </div>
  )
}

export default MainCarousel;