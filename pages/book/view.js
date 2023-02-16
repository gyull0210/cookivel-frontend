import { useEffect, useState } from 'react';
import { HiArrowLeft, HiBookmark, HiChevronLeft, HiChevronRight, HiCog8Tooth, HiHeart, HiOutlineBars3, HiOutlineBell, HiOutlineBookmark, HiOutlineChatBubbleOvalLeft, HiOutlineCog8Tooth, HiOutlineEllipsisHorizontal, HiOutlineHeart, HiOutlineShare, HiOutlineXMark } from 'react-icons/hi2';
import tw from 'twin.macro'
import Avatar from '../../components/core/avatar/Avatar';
import Toast from '../../components/overlay/toast/Toast';
import { Slide,ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const View = () => {

  const dummyData = 
  {title:"제목입니다", 
  subTitle:"1화 - 세부제목인데 조금 깁니다 더 길 수도 있습니다", 
  content:"컨텐츠 내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 임시내용입니다 "
};

  const [isClose, setIsClose] = useState(false);

  const [isAlert, setIsAlert] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isChapterListOpen, setIsChapterListOpen] = useState(false);
  const [isCommentListOpen, setIsCommentListOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isSettingOpen, setIsSetttingOpen] = useState(false);

  const [isLike, setIsLike] = useState(false);
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const [isMoreText, setIsMoreText] = useState(false);

  const handleFavorite = () => {
    if(!isFavorite){
      setIsFavorite(!isFavorite)
      toast.success("선호작품에 등록되었습니다", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2500
      })
    } else {
      setIsFavorite(false)
      toast.success("선호작품에서 삭제되었습니다", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2500
      })
    }    
  }

  const handleCommentLike = () => {
    setIsLike(!isLike)
  }

  const handleReplyOpen = () => {
    setIsReplyOpen(!isReplyOpen)
  }

  const handleBar = () => {
    setIsClose(!isClose);
    console.log(isClose)
  }

  let [isMessage, setIsMessage] = useState("");

  const handleAlert = () => {
    if(!isAlert){
      setIsAlert(true)
      toast.success("구독 알림이 설정되었습니다", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2500
      })
    }
    else {
      setIsAlert(false)
      toast.success("구독 알림이 취소되었습니다", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2500
      })
    }
  }

  const handleChapterList = () => {
    setIsCommentListOpen(false)
    setIsSetttingOpen(false)
    setIsChapterListOpen(!isChapterListOpen)
    console.log(isChapterListOpen, isCommentListOpen, isSettingOpen)
  }

  const handleCommentList = () => {
    setIsChapterListOpen(false)
    setIsSetttingOpen(false)
    setIsCommentListOpen(!isCommentListOpen)
    console.log(isChapterListOpen, isCommentListOpen, isSettingOpen)
  }

  const handleShare = () => {
    setIsShareOpen(!isShareOpen)
  }

  const handleSetting = () => {
    setIsChapterListOpen(false)
    setIsCommentListOpen(false)
    setIsSetttingOpen(!isSettingOpen)
    console.log(isChapterListOpen, isCommentListOpen, isSettingOpen)
  }

  const handleSidebar = () => {
    setIsChapterListOpen(false)
    setIsCommentListOpen(false)
    setIsSetttingOpen(false)
    console.log(isChapterListOpen, isCommentListOpen, isSettingOpen)
  }

  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed; 
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = '';
  //     window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  //   };
  // }, []);
  return (
    <div tw="relative">
      <header css={[tw`flex justify-center fixed top-0 z-30 w-full h-14 bg-white border-b border-gray-200 py-1.5`, isClose ? tw`hidden`: tw`` ]}>
        <nav tw="w-[425px] lg:w-[800px] flex justify-between items-center overflow-hidden px-2.5 sm:px-4">
          <div tw="relative">
            <button type="button" tw="p-3" onClick={()=>history.go(-1)}>
              <HiArrowLeft tw="w-6 h-6 text-gray-400"/>
            </button>
          </div>
          <div tw="max-w-[280px] lg:max-w-lg relative">
            <div tw="max-w-full text-lg font-semibold truncate text-ellipsis overflow-hidden whitespace-nowrap">{dummyData.title}</div>
          </div>
          <div tw="relative">
            <button type="button" tw="p-3" onClick={handleAlert}>
              <HiOutlineBell css={[tw`w-6 h-6 stroke-gray-400`, isAlert ? tw`fill-amber-200 stroke-amber-200 active:scale-50 duration-300 ease-in-out` : tw`active:scale-50 duration-300 ease-in-out`]}/>
            </button>
            <button type="button" tw="p-3" onClick={handleChapterList}>
              <HiOutlineBars3 tw="w-6 h-6 stroke-gray-400"/>
            </button>
          </div>     
        </nav>
      </header>

      <main tw="min-h-screen" onClick={handleBar}>
        <div tw="bg-transparent">
          <div tw="w-[425px] lg:w-[800px] mx-auto">
            <section tw="relative">
              <div tw="pt-24 px-6 sm:px-4 break-all">
                <article tw="text-xl">
                  <h1 tw="max-w-full font-semibold text-2xl text-center truncate text-ellipsis overflow-hidden whitespace-nowrap">{dummyData.subTitle}</h1>
                  {dummyData.content}
                </article>
                <div tw="w-full h-48 overflow-hidden"></div>
              </div>            
            </section>
          </div>
        </div>
      </main>

      <footer css={[tw`flex flex-col justify-center fixed bottom-0 z-30 w-full h-24 bg-white border-t border-gray-200`, isClose ? tw`hidden`: tw`` ]}>
        <div tw="flex justify-center w-full border-b border-gray-200 py-2">
          <div tw="w-[425px] lg:w-[800px] flex justify-between px-2 sm:px-4">
            <div tw="text-lg font-semibold text-gray-400">
            {dummyData.title+` 1화`}
            </div>
            <div tw="flex justify-end items-center gap-6">
              <button tw="flex items-center">
                <HiChevronLeft tw="w-6 h-6 text-gray-400"/>
                <span tw="text-lg text-gray-400">이전</span>
              </button>
              <button tw="flex items-center">
                <span tw="text-lg text-gray-400">다음</span>
                <HiChevronRight tw="w-6 h-6 text-gray-400"/>
              </button>
            </div>
          </div>          
        </div>
        <div tw="flex justify-center items-center w-full py-4">        
          <div tw="w-[425px] lg:w-[800px] flex justify-around items-center px-2 sm:px-4">
            <button type="button" onClick={handleFavorite}>
              <HiOutlineHeart css={[
                tw`w-6 h-6 stroke-gray-400`, 
                isFavorite ? tw`stroke-red-400 fill-red-400 active:scale-50 duration-300 ease-in-out` : tw`active:scale-50 duration-300 ease-in-out`
                ]}
              />
            </button>   
            <button type="button" onClick={handleCommentList}><HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400"/></button>
            <button type="button" onClick={handleShare}><HiOutlineShare tw="w-6 h-6 stroke-gray-400"/></button>
            <button type="button" onClick={handleSetting}><HiOutlineCog8Tooth tw="w-6 h-6  stroke-gray-400"/></button>
          </div>           
        </div>
      </footer>
      <section css={[tw`absolute top-0 left-0 z-50`, isChapterListOpen ? tw`` : tw`hidden`]} aria-label="댓글 목록">
      <div css={[tw`fixed w-full h-full`, isChapterListOpen ? tw``:tw`hidden`]}>
        <div tw="absolute w-full h-full bg-black opacity-10 z-[40]" onClick={handleChapterList}></div>
        <aside tw="absolute bg-white w-full md:w-72 lg:w-96 h-full z-50 right-0 border-l border-gray-200 shadow-sm px-2 py-4 sm:px-4">
          <div tw="border-b border-gray-200">
            <button type="button" onClick={handleChapterList}>
              <HiOutlineXMark tw="w-6 h-6 stroke-gray-400"/>
            </button>
          </div>
          <div tw="h-[800px] overflow-y-scroll overscroll-none scrollbar-hide">
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
          </div>
          <div tw="mt-4 flex gap-4 justify-center px-2 py-4 bg-gray-200 text-gray-700 rounded-lg overflow-x-auto overflow-y-hidden whitespace-nowrap">
            <a href="###" tw="block font-medium focus:(font-semibold text-amber-600) cursor-pointer">1-100</a>
            <a href="###" tw="block font-medium focus:(font-semibold text-amber-600) cursor-pointer">100-200</a>
            <a href="###" tw="block font-medium focus:(font-semibold text-amber-600) cursor-pointer">200-300</a>
            <a href="###" tw="block font-medium focus:(font-semibold text-amber-600) cursor-pointer">400-500</a>
          </div>
        </aside>
      </div> 
      </section>
      <section css={[tw`absolute top-0 left-0 z-50`, isCommentListOpen ? tw`` : tw`hidden`]} aria-label="댓글 목록">
      <div css={[tw`fixed w-full h-full`, isCommentListOpen ? tw``:tw`hidden`]}>
        <div tw="absolute w-full h-full bg-black opacity-10 z-[40]" onClick={handleCommentList}></div>
        <aside tw="absolute bg-white w-full md:w-72 lg:w-96 h-full z-50 right-0 border-l border-gray-200 shadow-sm px-2 py-4 sm:px-4">
          <div tw="border-b border-gray-200">
            <button type="button" onClick={handleSidebar}>
              <HiOutlineXMark tw="w-6 h-6 stroke-gray-400"/>
            </button>
          </div>
          <div tw="h-[800px] overflow-y-scroll overscroll-none scrollbar-hide">
            <div tw="mb-4 text-xl px-4 py-3 font-semibold">댓글 목록</div>
            <div tw="px-4 py-1">
              <div tw="w-full h-24 border border-gray-200 text-gray-400 rounded-lg">
                댓글을 남겨주세요
              </div>
            </div>
            <div tw="flex gap-6">
              <a href="###" tw="block font-semibold px-6 py-2">인기순</a>
              <a href="###" tw="block font-semibold px-6 py-2">최신순</a>
            </div>
            <div tw="flex px-2 py-2 border-b border-gray-200">
              <div tw="mr-2">
                <Avatar size="sm" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={32} height={32}/>
              </div>
              <div tw="flex flex-col w-full">
                <div tw="mb-2 overflow-hidden">
                  <div tw="max-w-full align-top inline-block">
                    <h3 tw="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">익명의유저닉네임</h3>
                  </div>
                </div>
                <div tw="">
                <div css={[tw`mb-2 text-gray-500 text-ellipsis`, isMoreText ? tw``: tw`line-clamp-4`]}>
                  요즘은 코로나19로 어려운 시기를 보내고 있습니다. 하지만 우리는 이것을 함께 이겨낼 수 있습니다. 서로의 안전과 건강을 위해 마스크 착용과 손 소독 등 예방수칙을 잘 지켜야 합니다. 또한, 힘든 상황이지만 서로에게 격려와 응원을 보내며 이겨내는 힘을 얻어야 합니다. 더 나아가서는 어려운 상황에서도 포기하지 않고 노력하며, 새로운 가능성과 기회를 찾아 나아가는 자세가 필요합니다. 함께 노력하고, 서로 도와주며, 우리 모두가 힘을 합쳐 이 어려운 시기를 이겨내길 바랍니다. 감사합니다.
                </div>
                {!isMoreText && <a href="###" tw="block font-semibold text-right" onClick={()=>{setIsMoreText(!isMoreText)}}>더보기</a>}
                {isMoreText && <a href="###" tw="block font-semibold  text-right" onClick={()=>{setIsMoreText(!isMoreText)}}>접기</a>}
                </div>
                <div tw="mt-4 flex justify-between">
                  <div tw=""></div>
                  <div tw="flex gap-4">
                    <button type="button" onClick={handleCommentLike}>
                      <HiOutlineHeart css={[tw`w-6 h-6 stroke-gray-400 hover:stroke-red-400`, isLike ? tw`duration-300 stroke-red-400 fill-red-400 active:scale-50 ease-in-out`:tw`duration-300 active:scale-50 ease-in-out`]}/>
                    </button>
                    <button type="button">
                      <HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400 hover:stroke-blue-400"/>
                    </button>
                    <button type="button">
                      <HiOutlineEllipsisHorizontal tw="w-6 h-6 stroke-gray-400"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div> 
      </section>
      <section css={[tw`fixed w-full h-full top-0 left-0 z-50`, isShareOpen ? tw`` : tw`hidden`]} aria-label="공유 목록">
        <div tw="fixed w-full h-full bg-black opacity-10" onClick={handleShare}></div>
        <div tw="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60]">
          <div tw="flex relative flex-col w-96 h-64 bg-white py-6 px-4 border border-gray-200 rounded-lg">
            <h3 tw="text-xl font-semibold text-center">공유하기</h3>
          </div>
        </div>
      </section>
      <section css={[tw`fixed w-full h-full top-0 left-0 z-50`, isSettingOpen ? tw`` : tw`hidden`]} aria-label="설정 목록">
        <div tw="fixed w-full h-full bg-black opacity-10" onClick={handleSetting}></div>
        <div tw="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60]">
          <div tw="flex relative flex-col w-96 h-64 bg-white py-6 px-4 border border-gray-200 rounded-lg">
            <h3 tw="text-xl font-semibold text-center">뷰어설정</h3>
          </div>
        </div>
      </section>
      <ToastContainer transition={Slide}/>    
    </div>
  )
}

export default View;