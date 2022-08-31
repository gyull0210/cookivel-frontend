import { useState } from "react"
import Footer from "./Footer"
import {HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineBookmark, HiOutlineCog, HiOutlineMenu} from 'react-icons/hi'

export default function Layout({children}) {

  const [bookmark, setBookmark] = useState(false);
  
  const handleBookmark = () => {
    setBookmark(!bookmark);

    if(bookmark == true){
      alert("현재 회차가 북마크 되었습니다.")
    } else {
      alert("현재 회차가 북마크 해제되었습니다.")
    }
    
  }

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">       
        {/* Navbar */}
        <div className="w-full navbar bg-base-200 fixed top-0 z-50">
        <div className="flex-1 items-center justify-around max-w-screen-2xl mx-auto">
          <div className="flex-none">
            <button className="btn btn-ghost btn-cirle" onClick={()=>(history.go(-1))}>
              <span className="text-3xl">
                <HiOutlineChevronLeft/>
              </span>
            </button>
          </div>      
          <div className="flex flex-col grow justify-center items-center">
            <span className="normal-case text-lg text-gray-600 hidden lg:inline-block">작품명</span>
            <span className="normal-case text-xl font-semibold">1화 작품회차</span>
          </div>
          <div className="flex items-center">
            <label htmlFor="my-drawer-3" className="btn btn-ghost btn-square">
              <span className="text-3xl">
                <HiOutlineMenu/>
              </span>           
            </label>
            <label htmlFor="my-modal-2" className="btn btn-ghost btn-square">
              <span className="text-3xl">
                <HiOutlineCog/>
              </span>
            </label>
            <button className="btn btn-ghost btn-square" onClick={handleBookmark}>
              <span className="text-3xl">
                <HiOutlineBookmark/>
              </span>
            </button>
          </div>
        </div>
        </div>
        {/* Page content here */}
        {children}        
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <a className="">
              1화           
            </a>
          </li>
          <li>
            <a className="">
              1화           
            </a>
          </li>
          <li>
            <a className="">
              1화           
            </a>
          </li>
          <li>
            <a className="">
              1화           
            </a>
          </li>
          <li>
            <a className="">
              1화           
            </a>
          </li>
          <li>
            <a className="">
              1화           
            </a>
          </li>      
        </ul>   
      </div>
    </div>
  )
}