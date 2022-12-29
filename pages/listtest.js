import { useState } from "react";
import Badge from "../components/core/badge/Badge";
import List from "../components/overlay/list/List";
import ListItem from "../components/overlay/list/ListItem";
import { HiPlus, HiX } from 'react-icons/hi'
import Image from "next/image";

const ListTest = () => {

  
  const value1 = Math.floor(Math.random()*100);
  const value2 = Math.floor(Math.random()*100);
  const value3 = Math.floor(Math.random()*100);

  const chapters = Math.floor(Math.random()*100);

  let values = {value1, value2, value3};

  const [data, setData] = useState("");

  return (
    <div className="max-screen-lg container mx-auto">
      <div className="flex flex-col mb-10">
        <div className="w-[900px] h-[280px] flex flex-row items-center">
          <div className="relative">
            <div className="p-3">
              <div className="w-[150px] h-[200px] rounded-lg object-cover overflow-hidden">
                <Image src={`https://picsum.photos/150/200`} alt="cover" width="150" height="200"/>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <span className="px-2 bg-white text-red-600 border-2 border-b-full border-red-600 rounded-full">Update</span>
            </div>
          </div>
          <div className="ml-6">
            <div className="mb-4">
              <div className="relative flex flex-col">
                <div className="inline-block">                
                  <span className="mr-1 px-2 bg-primary text-white text-base rounded-full">자유</span>
                  <span className="mr-1 px-2 bg-success text-white text-base rounded-full">독점</span>
                  <span className="ml-1 px-2 bg-warning text-white text-base rounded-full">완결</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <h1 className="text-2xl">제목입니다만 제목입니다</h1>
                  <span className="text-base">아무개</span>
                </div>
              </div>            
              <span className="text-base vertical-bottom">총 {chapters}편</span>
            </div>
            <div className="w-[600px] line-clamp-2 mb-4">
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
            </div>
            <div className="flex gap-2 mb-4">
              <span className="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full">판타지</span>
              <span className="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full">회귀물</span>
              <span className="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full">빙의</span>
              <span className="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full">환생</span>
              <span className="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full">호러</span>
              <span className="px-2 text-gray-400 font-semibold border-2 border-gray-400 rounded-full">피폐물</span>
            </div>
            <div className="flex gap-4">
              <span className="text-base">조회수: {values.value1}</span>
              <span className="text-base">추천수: {values.value2}</span>
              <span className="text-base">구독수: {values.value3}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListTest;