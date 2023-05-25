import tw from 'twin.macro'
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi2'

const Pagination = (props) => {
/**
 * total = 게시물 총 갯수 data.length
 * limit = 페이지당 게시물 갯수
 * page = 현재 페이지
 * viewPerPage = 페이지 당 페이지네이션 버튼 수
 * totalPage = 총 페이지 갯수
 * startPage = 현재 페이지의 첫번째 페이네이션 버튼 숫자
 * endPage = 현재 페이지의 마지막 페이네이션 버튼 숫자 
 * firstNum = 현재 페이지의 첫번째 게시물 번호
 * lastNum = 현재 페이지의 마지막 게시물 번호
 */
  const { total, limit, page, setPage, viewPerPage } = props;

  const totalPage = Math.ceil(total/limit);

  if(page < 1){
    setPage(1);
  } else if(page > totalPage){
    setPage(totalPage);
  }

  let startPage, endPage;
  if(totalPage <= viewPerPage){
    startPage = 1;
    endPage = totalPage;
  } else {
    let maxPagesBeforeCurrPage = Math.floor(viewPerPage / 2);
    let maxPagesAfterCurrPage = Math.ceil(viewPerPage / 2) - 1;
      if (page <= maxPagesBeforeCurrPage) {
            // current page near the start
            startPage = 1;
            endPage = viewPerPage;
        } else if (page + maxPagesAfterCurrPage >= totalPage) {
            // current page near the end
            startPage = totalPage - viewPerPage + 1;
            endPage = totalPage;
        } else {
            // current page somewhere in the middle
            startPage = page - maxPagesBeforeCurrPage;
            endPage = page + maxPagesAfterCurrPage;
        }
  }

  let firstNum = (page - 1) * limit + 1;
  let lastNum = Math.min(firstNum + limit - 1, total);

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
      {Array.from(Array((endPage+1)-startPage).keys()).map(i => (
        <button
          tw="px-3 py-1.5 rounded-lg"
          key={startPage+i}
          css={page === startPage + i ? tw`text-white bg-black` : null}
          onClick={() => setPage(startPage+i)}
          aria-current={page === startPage + i ? "active" : null}
        >
          {startPage + i}
        </button>
      ))}
      <button
        tw="py-1.5"
        css={page === totalPage ? tw`text-gray-200`: null}
        onClick={() => setPage(page+1)}
        disabled={page === totalPage}
      >
        <HiOutlineChevronRight tw="w-6 h-6" />
      </button>
      <button 
        tw="py-1.5"
        css={page === totalPage ? tw`text-gray-200`: null}
        onClick={() => setPage(totalPage)}
        disabled={page === totalPage}
      >
        <HiOutlineChevronDoubleRight tw="w-6 h-6"/>
      </button>
    </div>
  </div>
  )
}

export default Pagination;