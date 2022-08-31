import { useState } from "react"
import Header from "./Header"

export default function Layout({children}) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">       
        {/* Navbar */}
        <Header isLogin={isLogin}/>
        {/* Page content here */}
        <div className="container mx-auto">
        {children}
        </div>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        {/* Sidebar content here */}
        {isLogin && 
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">       
        {/* anonymous user */}   
          <li>
            <a className="flex flex-row items-center">
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </div>
              <div className="text-lg">
                로그인 후 이용해주세요
              </div>
            </a>
          </li>
          <li><a>공지사항</a></li>
          <li><a>고객센터</a></li>
        </ul>
        }
        {/* authenticated user */}
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <a className="flex flex-row items-center">
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <span className="text-lg">닉네임</span>
                  <span className="ml-2 badge">작가</span>
                </div>               
                <span className="text-base text-gray-400">abcd1234@example.com</span>
              </div>
            </a>
          </li>
          <li>
            <a className="justify-between">
            알림
            <span className="badge">New</span>
            </a>
          </li>
          <li><a>내 작품관리</a></li>
          <li><a>내 서재</a></li>
          <li><a>설정</a></li>
          <li><a>공지사항</a></li>
          <li><a>고객센터</a></li>
          <li><a>로그아웃</a></li>      
        </ul>   
      </div>
    </div>
  )
}