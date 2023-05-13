import tw from 'twin.macro'
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi2'

const Pagination = (props) => {
/**
 * total = 게시물 총 갯수 data.length
 * limit = 페이지당 게시물 갯수
 * page = 현재 페이지
 * viewPerPage = 페이지네이션 버튼 수
 * totalNum = 총 페이지 갯수
 * pageGroup = 현재 페이지의 페이지네이션 버튼 수
 * firstNum = 현재 페이지의 첫번째 페이네이션 버튼 숫자
 * lastNum = 현재 페이지의 마지막 페이네이션 버튼 숫자 
 */
  const { total, limit, page, setPage, viewPerPage } = props;

  const totalNum = Math.ceil(total/limit);

  const pageGroup = Math.ceil(page/viewPerPage);

  let lastNum = pageGroup * viewPerPage;
  if(lastNum > totalNum)lastNum = totalNum;

  let firstNum = (lastNum - (viewPerPage - 1) <= 0) ? 1 : (lastNum - (viewPerPage - 1));

  const pageNumber = [];
  
  // Math.ceil: 올림
  if(totalNum < lastNum){
    for (let i = 0; i < totalNum; i++){
      pageNumber.push(i);
    }
  } else if(totalNum > lastNum){
    for (let i = 0; i < 4; i++){
      pageNumber.push(i);
    }
  }

  return (
    <div tw="flex flex-col lg:flex-row lg:items-center gap-6">
      <div tw="">
        총 {total} 개 게시물 중 {firstNum} - {lastNum}
      </div>
      <div tw="flex justify-center items-center gap-4">

      <button 
        tw="py-1.5"
        css={page === 1 ? tw`text-gray-200`: null}
        onClick={() => setPage(1)}
        disabled={page === 1}
      >
        <HiOutlineChevronDoubleLeft tw="w-6 h-6"/>
      </button>
      <button
        tw="py-1.5"
        css={page === 1 ? tw`text-gray-200`: null}
        onClick={() => setPage(page-1)}
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
      {pageNumber.map((_, i) => {
        if(i <= 2){
          return (
            <button
          tw="px-3 py-1.5 rounded-lg"
          key={i + 1}
          css={page === firstNum + i + 1 ? tw`text-white bg-black` : null}
          onClick={() => setPage(firstNum+1+i)}
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
        css={page === totalNum ? tw`text-gray-200`: null}
        onClick={() => setPage(page+1)}
        disabled={page === totalNum}
      >
        <HiOutlineChevronRight tw="w-6 h-6" />
      </button>
      <button 
        tw="py-1.5"
        css={page === totalNum ? tw`text-gray-200`: null}
        onClick={() => setPage(totalNum)}
        disabled={page === totalNum}
      >
        <HiOutlineChevronDoubleRight tw="w-6 h-6"/>
      </button>
    </div>
  </div>
  )
}

export default Pagination;