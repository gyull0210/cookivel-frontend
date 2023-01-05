import { useEffect, useState } from "react";
import Badge from "../components/core/badge/Badge";
import List from "../components/overlay/list/List";
import ListItem from "../components/overlay/list/ListItem";
import { HiPlus, HiX } from 'react-icons/hi'
import Image from "next/image";
import tw from 'twin.macro'
import { HiBookmark, HiOutlineBookmark, HiOutlinePlus } from "react-icons/hi2";

const ListTest = () => {

  
  const value1 = Math.floor(Math.random()*100);
  const value2 = Math.floor(Math.random()*100);
  const value3 = Math.floor(Math.random()*100);

  const chapters = Math.floor(Math.random()*100);

  const values = {value1, value2, value3, chapters}

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(values);
  }, []);

  return (
    <div tw="max-w-screen-lg container mx-auto">
      <div tw="flex flex-col mb-10">
        <div tw="w-[900px] h-[280px] flex flex-row items-center">
          <div tw="relative">
            <div tw="p-3">
              <div tw="w-[150px] h-[200px] rounded-lg object-cover overflow-hidden">
                <Image tw="w-full h-full object-center object-cover" src="https://api.lorem.space/image/book?w=200&h=300" alt="cover" width={200} height={300}/>
              </div>
            </div>
            <div tw="absolute top-0 right-0">
              <span tw="px-2 bg-white text-red-600 border-2 border-red-600 rounded-full">NEW</span>
            </div>
          </div>
          <div tw="ml-6">
            <div tw="mb-4">
              <div tw="relative flex flex-col">
                <div tw="inline-block">                
                  <span tw="mr-1 px-2 bg-primary text-white text-base rounded-full">자유</span>
                  <span tw="mr-1 px-2 bg-success text-white text-base rounded-full">독점</span>
                  <span tw="ml-1 px-2 bg-warning text-white text-base rounded-full">완결</span>
                </div>
                <div tw="inline-flex items-center gap-2">
                  <h1 tw="text-2xl">제목입니다만 제목입니다</h1>
                  <span tw="text-base">아무개</span>
                </div>
              </div>            
              <span tw="text-base align-bottom">총 {data.chapters}편</span>
            </div>           
            <div tw="flex gap-2 mb-4">
              <span tw="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full hover:shadow active:bg-gray-100">판타지</span>
              <span tw="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full hover:shadow active:bg-gray-100">회귀물</span>
              <span tw="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full hover:shadow active:bg-gray-100">빙의</span>
              <span tw="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full hover:shadow active:bg-gray-100">환생</span>
              <span tw="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full hover:shadow active:bg-gray-100">호러</span>
              <span tw="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full hover:shadow active:bg-gray-100">피폐물</span>
            </div>
            <div tw="flex gap-4">
              <span tw="text-base">조회수: {data.value1}</span>
              <span tw="text-base">추천수: {data.value2}</span>
              <span tw="text-base">구독수: {data.value3}</span>
            </div>
            <div tw="flex gap-4">
              <button type="button" tw="px-4 py-2 w-full bg-black text-white border rounded-lg font-semibold hover:shadow active:bg-gray-600">첫 화 읽기</button>
              <button type="button" tw="flex justify-center items-center px-4 py-2 w-full bg-white text-gray-500 border border-gray-600 rounded-lg font-semibold hover:shadow active:bg-gray-100">
                <HiOutlinePlus tw="w-5 h-5 mr-2"/>
                구독하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListTest;