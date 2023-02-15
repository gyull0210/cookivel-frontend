import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper"
import { HiBars3, HiMagnifyingGlass, HiOutlineBell, HiChevronRight, HiChevronLeft, HiXMark } from 'react-icons/hi2'
import Button from '../../components/core/button/Button'
import Avatar from '../../components/core/avatar/Avatar'
import MainCarousel from '../../components/overlay/mainCarosel/MainCarosel'
import { useEffect, useRef, useState } from 'react'
import useDetectClose from '../../components/hooks/useDetectClose'

export default function StoryListCopy() {

  
  const [cardList, setCardList] = useState("");

  const [isLoading, setIsLoading] = useState(false); 
  const [isError, setIsError] = useState(false); 
 
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://picsum.photos/v2/list`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Response Error");
      setCardList((response).json());
      console.log(cardList)
    };
    fetchData().catch((error) => console.log(error));
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const pageRef= useRef(null);

  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [sidebarIsOpen, sidebarRef, sidebarHandler] = useDetectClose(false);
  return (
    <>
      <Head>
        <title>쿠키블 : 스토리룸</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header tw="min-w-[425px] border-b border-gray-200">
        <nav tw="relative flex justify-between items-center max-w-screen-lg mx-auto px-4 py-2">         
          <div tw="flex justify-between items-center">
            <a tw="inline-flex mb-1" href="">           
              <span tw="text-2xl font-bold">O</span>
              <span tw="text-2xl font-bold text-[#E7CE96]">V</span>
              <span tw="text-2xl font-bold">EN</span>
            </a>
          </div>
          <div tw="flex space-x-4 text-base">
            <a tw="px-4 py-2 font-semibold" href="">대시보드</a>
          </div>
          <div tw="flex justify-between items-center">            
            <button
               type="button"
               tw="hidden lg:block p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
              >
              <HiOutlineBell tw="w-6 h-6 text-gray-400"/>
            </button>
            <div tw="hidden">

            </div>              
              {
                 
              <>
              <button tw="hidden md:block ml-3" type="button" ref={myPageRef} onClick={myPageHandler}>
                  <Avatar size="sm" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={32} height={32}/>
              </button>
              <div css={[tw`hidden absolute bg-white w-[100px] h-full rounded-lg top-10 right-0 z-10 mt-4 origin-top-right shadow duration-150 ease-in-out`, myPageIsOpen ? tw`opacity-100`: tw`opacity-0`]}>
                <ul tw="text-center">
                  <li>메뉴</li>
                  <li>메뉴</li>
                </ul>
              </div>
              </>
              }
            <div tw="lg:hidden">
            <button
              ref={sidebarRef}
              type="button"
              tw="p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
              onClick={sidebarHandler}
            >
              <HiBars3 tw="w-6 h-6 text-gray-400"/>
            </button>
            </div>
          </div>
        </nav>
      </header>  
      <aside tw="absolute w-[300px] md:hidden h-screen bg-gray-50 top-0 right-0 z-50 duration-300 transition-all ease-in-out shadow" css={[sidebarIsOpen ? tw`translate-x-0`: tw`translate-x-[300px]`]}>
        <nav tw="">
          <div tw="flex justify-end border-b border-gray-400 p-3">
            <button type="button" onClick={sidebarHandler}><HiXMark tw="w-8 h-8"/></button>
          </div>
          <div tw="flex items-center p-3">
            <Avatar size="md" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={48} height={48}/>
            <div tw="ml-4">
              <p tw="text-xl font-bold">빵냥 님</p>
              <span tw="text-gray-400">mkht0210@gmail.com</span>
            </div>
          </div>
          <div tw="flex flex-col p-3">
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">대시보드</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">작품 목록</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">작품 쓰기</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">스토리룸</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">통계</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">설정</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">고객센터</a>           
          </div>
        </nav>
      </aside>
      <main tw="flex flex-col mt-12 overflow-x-hidden">    
        <section tw="container mx-auto mt-12">
          <div tw="max-w-screen-lg mx-auto px-2">
            <div tw="w-full border-b border-gray-200"/>
            <div tw="flex justify-end py-4">
              <button tw="bg-black text-white px-6 py-2 rounded-lg">
                작품 등록
              </button>
            </div>
            <div tw="w-full border-b border-gray-200 mb-4"/>

            <div tw="w-full flex py-6 justify-between items-center px-4">
              <div tw="flex gap-6">
                <div tw="">
                  <div tw="block relative w-24 h-32 md:w-32 md:h-40 rounded-lg overflow-hidden">
                    <img tw="w-full h-full object-cover" src="https://api.lorem.space/image/movie?w=208&h=240" alt="책표지"/>
                  </div>
                </div>
                <div tw="flex flex-col gap-6 items-stretch">
                  <div tw="">
                    <h1 tw="text-lg font-bold">제목입니다</h1>
                    <span tw="text-sm text-gray-400">총 300화</span>
                    <p tw="text-sm text-gray-400">간단한 설명입니다</p>
                  </div>                 
                </div>
              </div>
              <div tw="">
                <button tw="p-3 rounded-full hover:bg-gray-100 active:bg-gray-200">
                  <HiChevronRight tw="w-8 h-8 fill-gray-400"/>
                </button>
              </div>
              <div tw="hidden flex flex-col gap-2">
                <button tw="px-6 py-2 border text-sm rounded-lg hover:shadow">공지 등록</button>
                <button tw="px-6 py-2 border text-sm rounded-lg hover:shadow">회차 쓰기</button>
                <button tw="px-6 py-2 border text-sm rounded-lg hover:shadow">작품 수정</button>
                <button tw="px-6 py-2 border text-sm rounded-lg hover:shadow">작품 삭제</button>
              </div>
            </div>
          </div>
        </section>
        <section tw="max-w-screen-lg mx-auto">
                
        </section>
      </main>
      <footer>
        
      </footer>
    </>
  )
}
