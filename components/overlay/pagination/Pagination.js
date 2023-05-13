import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';

const Pagination = ({ total, limit, page, setPage }) => {

  const pageNum = Math.ceil(total / limit);

  const onPrev = () => {
    setPage(page-1); 
    setCurrPage(page-2);
  }

  const onNext = () => {  
    setPage(page + 1 < pageNum ? page+1 : page = pageNum ); 
    setCurrPage(page);
  }

  const onFirst = () => {
    setPage(1);
    setCurrPage(1)
  }

  const onEnd = () => {
    setPage(pageNum);
    setCurrPage(pageNum) 
  }

  const [currPage, setCurrPage] = useState(page);

  const maxFirstNum = pageNum - 4;
  const clampedFirstNum = Math.min(currPage - (currPage % 5) + 1, maxFirstNum);
  const firstNum = Math.max(clampedFirstNum, 1);
  const lastNum = Math.min(firstNum + 4, pageNum);

  /**
   * 모든 글의 갯수
   * 현재 페이지 번호
   * 한 페이지당 표시할 게시물 수
   * 한번에 표시할 페이지 갯수
   * 
   * prev = (startPage === 1) ? false : true
   * next = (endPage === totalPage) ? false : true
   * 
   * totalPage = ((totalPost - 1)/postPerPage) + 1
   */

  return (
    <div tw="flex flex-col lg:flex-row lg:items-center gap-6">
      <div tw="">
        총 {total} 개 게시물 중 {firstNum} - {lastNum}
      </div>
    <div tw="flex justify-center items-center gap-4">

      <button 
        tw="py-1.5"
        css={page === 1 ? tw`text-gray-200`: null}
        onClick={() => onFirst()}
        disabled={page === 1}
      >
        <HiOutlineChevronDoubleLeft tw="w-6 h-6"/>
      </button>
      <button
        tw="py-1.5"
        css={page === 1 ? tw`text-gray-200`: null}
        onClick={() => onPrev()}
        disabled={page === 1}
      >
        <HiOutlineChevronLeft tw="w-6 h-6" />
      </button>
      <button 
        tw="px-3 py-1.5 rounded-lg"
        onClick={() => setPage(firstNum)}
        css={page === firstNum ? tw`text-white bg-black` : null}>
        {firstNum}
      </button>
      {Array(4).fill().map((_, i) => {
        if(i <= 2){
          return (
            <button
          tw="px-3 py-1.5 rounded-lg"
          key={i + 1}
          css={page === firstNum + i + 1 ? tw`text-white bg-black` : null}
          onClick={() => {setPage(firstNum+1+i)}}
        >
          {firstNum + i + 1}
        </button>
          )
        }
        else if(i>=3){
          return (
            <button
          tw="px-3 py-1.5 rounded-lg"
          key={i + 1}
          css={page === lastNum ? tw`text-white bg-black` : null}
          onClick={() => setPage(lastNum)}
        >
          {lastNum}
        </button>
          )
        }})}
      <button
        tw="py-1.5"
        css={page === pageNum ? tw`text-gray-200`: null}
        onClick={() => onNext()}
        disabled={page === pageNum}
      >
        <HiOutlineChevronRight tw="w-6 h-6" />
      </button>
      <button 
        tw="py-1.5"
        css={page === pageNum ? tw`text-gray-200`: null}
        onClick={() => onEnd()}
        disabled={page === pageNum}
      >
        <HiOutlineChevronDoubleRight tw="w-6 h-6"/>
      </button>
  </div>
  </div>
 )
}

export default Pagination;