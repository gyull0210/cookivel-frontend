import Head from 'next/head'
import Image from 'next/image'
import tw from 'twin.macro'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper"
import { HiBars3, HiMagnifyingGlass, HiOutlineBell, HiChevronRight, HiChevronLeft, HiXMark } from 'react-icons/hi2'
import Button from '../components/core/button/Button'
import Avatar from '../components/core/avatar/Avatar'
import MainCarousel from '../components/overlay/mainCarosel/MainCarosel'
import { useEffect, useRef, useState } from 'react'
import useDetectClose from '../components/hooks/useDetectClose'

export default function Copy() {

  const handleAvatar = async () => {
    const res = await fetch("https://i.pravatar.cc/48");

    return res.json();
  }

  const src= "https://i.pravatar.cc/48/"

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

  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [sidebarIsOpen, sidebarRef, sidebarHandler] = useDetectClose(false);

  return (
    <>
      <Head>
        <title>쿠키블</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header tw="w-full h-16 border-b border-gray-200">
        <nav tw="relative flex justify-between items-center max-w-screen-lg mx-auto px-4 py-2">
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
          <div tw="flex justify-between items-center space-x-4">
            <div tw="inline-flex mb-1">
              <span tw="text-2xl font-bold">C</span>
              <span tw="text-2xl font-bold text-[#E7CE96]">OO</span>
              <span tw="text-2xl font-bold">KVEL</span>
            </div>

            <div tw="hidden lg:flex space-x-4 text-base">
              <a tw="px-4 py-2 font-semibold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="">자유연재</a>
              <a tw="px-4 py-2 font-semibold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="">리뷰</a>
              <a tw="px-4 py-2 font-semibold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="">내 서재</a>
            </div>
          </div>

          <div tw="flex justify-between items-center">
            <button
              type="button"
              tw="p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
            >
              <HiMagnifyingGlass tw="w-6 h-6 text-gray-400"/>
            </button>
            <button
               type="button"
               tw="hidden lg:block p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
              >
              <HiOutlineBell tw="w-6 h-6 text-gray-400"/>
            </button>              
              {                
              <button tw="hidden md:flex items-center ml-3" type="button" ref={myPageRef} onClick={myPageHandler}>
                <Avatar size="sm" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={32} height={32}/>
              </button>
              }
          </div>
        </nav>
      </header>
      <div tw="md:hidden border-b border-gray-200">
        <nav tw="relative flex justify-between items-center text-center max-w-screen-lg mx-auto">
          <a tw="py-3 w-full font-semibold active:bg-gray-100" href="">자유연재</a>
          <a tw="py-3 w-full font-semibold">리뷰</a>
          <a tw="py-3 w-full font-semibold">내 서재</a>
        </nav>
      </div>
      <aside tw="absolute w-[300px] md:hidden h-screen bg-gray-50 top-0 z-50 duration-300 transition-all ease-in-out shadow" css={[sidebarIsOpen ? tw``: tw`-translate-x-[300px]`]}>
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
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">알림</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">내 서재</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">작품 쓰기</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">스토리룸</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">이벤트</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">고객센터</a>
            <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">공지사항</a>
          </div>
        </nav>
      </aside>
      <main tw="flex flex-col mt-52">   
        <section tw="relative w-full h-80">
          <div tw="lg:max-w-[1970px] w-full relative mx-auto p-0 flex justify-center">
          <Swiper
            tw="min-w-[calc((3*480px) + (3* 20px))] lg:min-w-[calc((3 * 560px) + (3 * 20px))] lg:max-w-[calc((3 * 560px) + (3 * 20px))] h-80 flex flex-col justify-center items-center"
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            centeredSlides={true}
            loopAdditionalSlides={1}
            slidesPerView={3}
            slidesPerGroup={3}
            watchOverflow={true}
            navigation={{prevEl: prevRef.current, nextEl: nextRef.current}}
            pagination={{ clickable: true, type: 'bullets' , el: 'swiper-pagination-container'}}
            scrollbar={{ draggable: true, el: null }}
            autoplay={false}           
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.25,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },

            }}
          >
            <SwiperSlide style={{minWidth:'500px', width:'580px', padding: '0 20px', overflow:'hidden'}}>
              <div tw="w-full h-full flex-shrink-0 cursor-pointer w-[calc(100vw - 28px)] md:min-w-[500px] border rounded-lg overflow-hidden text-white">
                <div tw="block w-full aspect-w-4 aspect-h-3 relative pb-[75%]">
                  <Image tw="absolute object-center object-cover w-full top-0 left-0 bg-no-repeat bg-fixed" src="https://api.lorem.space/image/furniture?w=800&h=599" width={560} height={420} alt="1"/>
                  <div tw="p-[30px]">
                    <div tw="relative w-full h-full select-none">
                      <span tw="text-white bg-black opacity-95 whitespace-nowrap text-center align-middle absolute inline-block"></span>
                      <div tw="text-white pt-[40px] absolute top-[50%] transform">
                        <h3>가상아이돌 김준익</h3>
                        <p>케이팝 덕후 모여라,<br/>현실고증 300% 돌덕질 만화!</p>
                        <p>웹툰 · 31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{minWidth:'500px', width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-full h-full flex-shrink-0 cursor-pointer w-[calc(100vw - 28px)] min-w-[500px] border rounded-lg overflow-hidden">
                <div tw="block w-full aspect-w-4 aspect-h-3 relative pb-[75%]">
                <Image tw="absolute object-center object-cover w-full top-0 left-0 bg-no-repeat bg-fixed" src="https://api.lorem.space/image/watch?w=800&h=599" width={560} height={420} alt="1"/>
                  <div tw="p-[30px]">
                    <div tw="relative w-full h-full select-none">
                      <span tw="text-white bg-black opacity-95 whitespace-nowrap text-center align-middle absolute inline-block"></span>
                      <div tw="text-black pt-[40px] absolute top-[50%] transform">
                        <h3>가상아이돌 김준익</h3>
                        <p>케이팝 덕후 모여라,<br/>현실고증 300% 돌덕질 만화!</p>
                        <p>웹툰 · 31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{minWidth:'500px', width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-full h-full flex-shrink-0 cursor-pointer w-[calc(100vw - 28px)] min-w-[500px] border rounded-lg overflow-hidden">
                <div tw="block w-full aspect-w-4 aspect-h-3 relative pb-[75%]">
                <Image tw="absolute object-center object-cover w-full top-0 left-0 bg-no-repeat bg-fixed" src="https://api.lorem.space/image/shoes?w=800&h=599" width={560} height={420} alt="1"/>
                  <div tw="p-[30px]">
                    <div tw="relative w-full h-full select-none">
                      <span tw="text-white bg-black opacity-95 whitespace-nowrap text-center align-middle absolute inline-block"></span>
                      <div tw="text-black pt-[40px] absolute top-[50%] transform">
                        <h3>가상아이돌 김준익</h3>
                        <p>케이팝 덕후 모여라,<br/>현실고증 300% 돌덕질 만화!</p>
                        <p>웹툰 · 31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{minWidth:'500px', width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-full h-full flex-shrink-0 cursor-pointer w-[calc(100vw - 28px)] min-w-[500px] border rounded-lg overflow-hidden">
                <div tw="block w-full aspect-w-4 aspect-h-3 relative pb-[75%]">
                <Image tw="absolute object-center object-cover w-full top-0 left-0 bg-no-repeat bg-fixed" src="https://api.lorem.space/image/movie?w=800&h=599" width={560} height={420} alt="1"/>
                  <div tw="p-[30px]">
                    <div tw="relative w-full h-full select-none">
                      <span tw="text-white bg-black opacity-95 whitespace-nowrap text-center align-middle absolute inline-block"></span>
                      <div tw="text-black pt-[40px] absolute top-[50%] transform">
                        <h3>가상아이돌 김준익</h3>
                        <p>케이팝 덕후 모여라,<br/>현실고증 300% 돌덕질 만화!</p>
                        <p>웹툰 · 31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{minWidth:'500px', width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-full h-full flex-shrink-0 cursor-pointer w-[calc(100vw - 28px)] min-w-[500px] border rounded-lg overflow-hidden">
                <div tw="block w-full aspect-w-4 aspect-h-3 relative pb-[75%]">
                <Image tw="absolute object-center object-cover w-full top-0 left-0 bg-no-repeat bg-fixed" src="https://api.lorem.space/image/furniture?w=800&h=599" width={560} height={420} alt="1"/>
                  <div tw="p-[30px]">
                    <div tw="relative w-full h-full select-none">
                      <span tw="text-white bg-black opacity-95 whitespace-nowrap text-center align-middle absolute inline-block"></span>
                      <div tw="text-black pt-[40px] absolute top-[50%] transform">
                        <h3>가상아이돌 김준익</h3>
                        <p>케이팝 덕후 모여라,<br/>현실고증 300% 돌덕질 만화!</p>
                        <p>웹툰 · 31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{minWidth:'500px', width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-full h-full flex-shrink-0 cursor-pointer w-[calc(100vw - 28px)] min-w-[500px] border rounded-lg overflow-hidden">
                <div tw="block w-full aspect-w-4 aspect-h-3 relative pb-[75%]">
                <Image tw="absolute object-center object-cover w-full top-0 left-0 bg-no-repeat bg-fixed" src="https://api.lorem.space/image/album?w=800&h=599" width={560} height={420} alt="1"/>
                  <div tw="p-[30px]">
                    <div tw="relative w-full h-full select-none">
                      <span tw="text-white bg-black opacity-95 whitespace-nowrap text-center align-middle absolute inline-block"></span>
                      <div tw="text-black pt-[40px] absolute top-[50%] transform">
                        <h3>가상아이돌 김준익</h3>
                        <p>케이팝 덕후 모여라,<br/>현실고증 300% 돌덕질 만화!</p>
                        <p>웹툰 · 31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{minWidth:'500px', width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-full h-full flex-shrink-0 cursor-pointer w-[calc(100vw - 28px)] min-w-[500px] border rounded-lg overflow-hidden">
                <div tw="block w-full aspect-w-4 aspect-h-3 relative pb-[75%]">
                <Image tw="absolute object-center object-cover w-full top-0 left-0 bg-no-repeat bg-fixed" src="https://api.lorem.space/image/pizza?w=800&h=599" width={560} height={420} alt="1"/>
                  <div tw="p-[30px]">
                    <div tw="relative w-full h-full select-none">
                      <span tw="text-white bg-black opacity-95 whitespace-nowrap text-center align-middle absolute inline-block"></span>
                      <div tw="text-black pt-[40px] absolute top-[50%] transform">
                        <h3>가상아이돌 김준익</h3>
                        <p>케이팝 덕후 모여라,<br/>현실고증 300% 돌덕질 만화!</p>
                        <p>웹툰 · 31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{minWidth:'500px', width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-full h-full flex-shrink-0 cursor-pointer w-[calc(100vw - 28px)] min-w-[500px] border rounded-lg overflow-hidden">
                <div tw="block w-full aspect-w-4 aspect-h-3 relative pb-[75%]">
                <Image tw="absolute object-center object-cover w-full top-0 left-0 bg-no-repeat bg-fixed" src="https://api.lorem.space/image/fashion?w=800&h=599" width={560} height={420} alt="1"/>
                  <div tw="p-[30px]">
                    <div tw="relative w-full h-full select-none">
                      <span tw="text-white bg-black opacity-95 whitespace-nowrap text-center align-middle absolute inline-block"></span>
                      <div tw="text-black pt-[40px] absolute top-[50%] transform">
                        <h3>가상아이돌 김준익</h3>
                        <p>케이팝 덕후 모여라,<br/>현실고증 300% 돌덕질 만화!</p>
                        <p>웹툰 · 31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{minWidth:'500px', width:'580px', padding: '0 10px', borderRadius: '0.5rem', overflow:'hidden'}}>
              <div tw="w-full h-full flex-shrink-0 cursor-pointer w-[calc(100vw - 28px)] min-w-[500px] border rounded-lg overflow-hidden">
                <div tw="block w-full aspect-w-4 aspect-h-3 relative pb-[75%]">
                <Image tw="absolute object-center object-cover w-full top-0 left-0 bg-no-repeat bg-fixed" src="https://api.lorem.space/image/car?w=800&h=599" width={560} height={400} alt="1"/>
                  <div tw="p-[30px]">
                    <div tw="relative w-full h-full select-none">
                      <span tw="text-white bg-black opacity-95 whitespace-nowrap text-center align-middle absolute inline-block"></span>
                      <div tw="text-black pt-[40px] absolute top-[50%] transform">
                        <h3>가상아이돌 김준익</h3>
                        <p>케이팝 덕후 모여라,<br/>현실고증 300% 돌덕질 만화!</p>
                        <p>웹툰 · 31</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div tw="absolute w-full flex justify-between items-center top-1/3 z-20">
            <button
              ref={prevRef}
              type="button"
              tw="min-w-fit h-full p-3 hover:bg-gray-50 text-gray-400 lg:hover:bg-transparent lg:hover:text-sky-500 rounded-full lg:rounded-none"
            >
              <HiChevronLeft tw="w-12 h-12 text-gray-400 hover:lg:text-sky-500"/>
            </button>
            <button
              ref={nextRef}
              type="button"
              tw="min-w-fit h-full p-3 hover:bg-gray-50 text-gray-400 lg:hover:bg-transparent lg:hover:text-sky-500 rounded-full lg:rounded-none"
            >
              <HiChevronRight tw="w-12 h-12"/>
            </button>
          </div>         
          </div>
          <div className="swiper-pagination-container"></div>         
        </section>
      </main>
      <footer>
        
      </footer>
    </>
  )
}

