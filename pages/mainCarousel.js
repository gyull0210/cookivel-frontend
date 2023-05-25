import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import tw from 'twin.macro';

const MainCarousel = (props) => {

  const { slides } = props;

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const pageRef = useRef(null);

  return (
  <div tw="relative max-w-screen-lg flex overflow-hidden">
    <div tw="fixed w-full flex overflow-hidden">
      {slides.map((slide, i) => (
        <div tw="w-[580px] h-[320px] overflow-hidden mx-auto px-4" key={i}>
          <Image tw="block flex-none w-full h-full object-cover object-center" src={faker.image.urlLoremFlickr({width:560, height:320, category:"capybara"})} alt={`슬라이드${i}`} width={580} height={320}/>
        </div>
      ))}   
    </div>
  </div>
  )
}

export default MainCarousel;