import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'

const MainCarousel = ({cardList}) => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperSetting, setSwiperSetting] = useState(null);

  useEffect(() => {
    if(!swiperSetting){
      const settings = {
        spaceBetween: 50,
        loop: true,
        Autoplay: true,
        navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        },
        scrollbar: { draggable: true, el: null },
        pagination: {
          type: 'bullets'
        },
        slidesPerView: 3,
        onBeforeInit: (swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        },

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }}
        
      };
      setSwiperSetting(settings);
    }
  },[swiperSetting]);

  SwiperCore.use([Navigation, Pagination]);

  return (
    <div tw="w-full flex justify-center items-center">
      <button
        ref={prevRef}
        type="button"
        tw="p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
      >
        <HiChevronLeft tw="w-12 h-12 text-gray-400"/>
      </button>
      {swiperSetting && (
      <Swiper tw="xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg" {...swiperSetting}>  
      {cardList ? cardList.list.map((card) => (
      <SwiperSlide tw="bg-gray-200 rounded-lg" key={card.id}>
        <Image src={card.url} alt={'캐러셀'} width={500} height={400}/>
      </SwiperSlide>
      ))
      : <SwiperSlide tw="w-1/3 h-72 bg-gray-200 rounded-lg"></SwiperSlide>
      }  
      </Swiper>
      )}
      <button
        ref={nextRef}
        type="button"
        tw="p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
      >
        <HiChevronRight tw="w-12 h-12 text-gray-400"/>
      </button>
    </div>
  )
}

export default MainCarousel;