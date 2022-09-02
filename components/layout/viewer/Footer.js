import {HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChatAlt, HiOutlineThumbUp, HiOutlineMenu} from 'react-icons/hi'

export default function Footer({handleCommentShow}) {
  return (
    <footer className="w-full navbar bg-base-200 fixed bottom-0 z-40">
      <div className="flex-1 justify-around max-w-screen-2xl mx-auto">
        <div className="flex-none">
          <button className="btn btn-ghost btn-cirle text-lg">
            <span className="text-3xl">
              <HiOutlineChevronLeft/>
            </span>
            이전화
          </button>
        </div>     
        <div className="flex grow justify-center items-center">
          <button className="btn btn-ghost btn-cirle text-lg" onClick={handleCommentShow}>
            <span className="text-2xl mr-1">
                <HiOutlineChatAlt/>
            </span>
            댓글
          </button>
          <button className="btn btn-ghost btn-cirle text-lg">
            <span className="text-2xl mr-1">
                <HiOutlineThumbUp/>
            </span>
            추천
          </button>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-cirle text-lg">
            다음화
            <span className="text-3xl">
              <HiOutlineChevronRight/>
            </span>  
          </button>
        </div>
      </div>
    </footer>
  )
}