import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import { HiFilter } from 'react-icons/hi'
import { HiBars3, HiMagnifyingGlass, HiOutlineBell, HiChevronRight, HiChevronLeft, HiXMark, HiAdjustmentsHorizontal, HiChevronDown, HiOutlineChevronDown, HiOutlineChevronUp, HiEye, HiHeart, HiBookmark, HiUser, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi2'
import Button from '../../components/core/button/Button'
import Avatar from '../../components/core/avatar/Avatar'
import MainCarousel from '../../components/overlay/mainCarosel/MainCarosel'
import { useEffect, useRef, useState } from 'react'
import useDetectClose from '../../components/hooks/useDetectClose'
import { faker } from '@faker-js/faker/locale/ko'
import BookItem from '../../components/book/bookItem'
import { Menu, Popover } from '@headlessui/react'
import Pagination from '../../components/overlay/pagination/Pagination'
import BookList from '../../components/book/bookList'
import FilterModal from './filterModal'

export default function Book() {

  const [dropdownIsOpen, dropdownRef,dropdownHandler] = useDetectClose(false); 

  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [sidebarIsOpen, sidebarRef, sidebarHandler] = useDetectClose(false);

  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);

  const handleOpenFilterModal = () => {
    setIsOpenFilterModal(!isOpenFilterModal);
  }

  const [books, setBooks] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => setBooks(data)); 
// }, [])

const dummyData = {
  bookImageUrl: faker.image.city(208, 240, true),
  bookTitle: faker.lorem.paragraph(1),
  bookChapters: faker.datatype.number({min:1, max:500}),
  bookWriter: faker.name.firstName(),
  description: faker.lorem.paragraphs(5),
  read: faker.datatype.number({min:1, max:100000}),
  like: faker.datatype.number({min:1, max:10000}),
  subscribe: faker.datatype.number({min:1, max:10000}),
  tags:[
    faker.lorem.word(),
    faker.lorem.word(),
    faker.lorem.word(),
    faker.lorem.word(),
    faker.lorem.word(),
  ]
}

const [data, setData] = useState([]);

useEffect(() => {
setData(Array(227).fill(dummyData))

},[])

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
            <div tw="inline-flex font-jua">
              <span tw="text-2xl font-bold">C</span>
              <span tw="text-2xl font-bold text-[#E7CE96]">OO</span>
              <span tw="text-2xl font-bold">KVEL</span>
            </div>

            <div tw="hidden lg:flex space-x-4 text-base">
              <Link tw="px-4 py-2 font-semibold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="/book/nextpage">자유연재</Link>
              <Link tw="px-4 py-2 font-semibold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="/review/forum">리뷰</Link>
              <Link tw="px-4 py-2 font-semibold hover:(underline decoration-4 underline-offset-4 decoration-[#E7CE96]) rounded-lg" href="">내 서재</Link>
            </div>
          </div>

          <div tw="flex justify-between items-center">
            <button
              type="button"
              tw="p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full"
              onClick={()=>router.push("/search")}
            >
              <HiMagnifyingGlass tw="w-6 h-6 text-gray-400"/>
            </button>
            <Popover tw="relative">
              <Popover.Button tw="hidden lg:block p-3 hover:bg-gray-50 active:bg-gray-100 rounded-full">
                <HiOutlineBell tw="w-6 h-6 text-gray-400"/>
              </Popover.Button>
              <Popover.Panel tw="absolute z-10 w-64 h-72 mt-4 flex flex-col shadow rounded-lg duration-200 bg-white overflow-hidden -right-12">
                <div tw="flex flex-col h-full">
                  <div tw="border-b py-2 px-6">알림</div>
                  <div tw="">
                    <div tw="border-b py-2 px-6">메세지</div>
                    <div tw="border-b py-2 px-6">메세지</div>
                    <div tw="border-b py-2 px-6">메세지</div>
                  </div>           
                </div>
              </Popover.Panel>
            </Popover>
            <Menu as="div" tw="relative inline-block text-left">
              <div tw="relative">
              <Menu.Button tw="hidden md:flex items-center ml-3" type="button" ref={myPageRef} onClick={myPageHandler}>
                <Avatar size="sm" alt="avatar" src={faker.image.avatar()} width={32} height={32}/>
              </Menu.Button>
              <Menu.Items tw="absolute w-32 mt-4 z-10 flex flex-col shadow rounded-lg duration-200 bg-white overflow-hidden right-0">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      tw="px-4 py-2"
                      css={active && tw`bg-gray-200`}
                      href="/account-settings"
                    >
                    알림
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      tw="px-4 py-2"
                      css={active && tw`bg-gray-200`}
                      href="/account-settings"
                    >
                    스토리룸
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      tw="px-4 py-2"
                      css={active && tw`bg-gray-200`}
                      href="/account-settings"
                    >
                    공지사항
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      tw="px-4 py-2"
                      css={active && tw`bg-gray-200`}
                      href="/account-settings"
                    >
                    로그아웃
                    </a>
                  )}
                </Menu.Item>       
              </Menu.Items>
              </div>
            </Menu>
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
      <main tw="w-full flex flex-col mt-[115px] overflow-x-hidden">
             
        <section tw="relative w-full max-w-screen-lg mx-auto">
          <header>
            <nav tw="">

            </nav>
          </header>
          <div tw="max-w-screen-lg w-full flex items-center justify-between h-12 border-b mx-auto px-2">
            <button
              ref={dropdownRef}
              tw="flex items-center"
              type="button"
              onClick={dropdownHandler}
            >
              <span tw="mr-2">최신순</span>
              <HiOutlineChevronUp tw="w-4 h-4" css={dropdownIsOpen ? tw`rotate-180`: tw``}/>
            </button>
            <button
              tw="flex items-center" 
              type="button"
              onClick={() => handleOpenFilterModal()}>
                <HiAdjustmentsHorizontal tw="w-8 h-8"/>
                <span tw="ml-2">필터</span>
            </button>
          </div>
          {dropdownIsOpen &&
            <div tw="absolute bg-gray-50 border rounded-lg z-10 px-4 py-2">
              <div tw="cursor-pointer">최신순</div>
              <div tw="cursor-pointer">인기순</div>
            </div>}
        </section>
        <section tw="mt-12 max-w-screen-lg mx-auto">
          <div tw="flex flex-wrap mx-auto mb-4">
            {/* <div tw="w-full border-b border-gray-200"></div>
            {data.slice(offset, offset + limit).map((data, index) => (
              <BookItem key={index} id={index+1} book={data}/>
            ))} */}
            <BookList offset={offset} limit={limit} data={data}/>
          </div>
          <div tw="flex justify-center">
            <Pagination total={data.length} limit={limit} page={page} setPage={setPage}/>
          </div>
        </section>
        <div css={[tw`fixed w-full h-full top-0 left-0 z-10`, isOpenFilterModal ? tw`` : tw`hidden`]}>
          <FilterModal isOpen={isOpenFilterModal} onClose={() => setIsOpenFilterModal()} onClick={handleOpenFilterModal}/>
        </div>    
      </main>
      <footer tw="h-32">
        
      </footer>
    </>
  )
}
