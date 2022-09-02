import Link from 'next/link'

export default function Header({isLogin, children}){
  return (
    <div className="w-full bg-white fixed z-50">
          <div className="navbar lg:max-w-screen-2xl mx-auto bg-base-200 xl:rounded-lg">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="flex-1 justify-center px-2 mx-2 gap-4 pl-10 lg:pl-6 lg:justify-start">
            <div className="flex items-center mb-1">
              <span className="text-2xl font-semibold text-black dark:text-gray-200">C</span>
              <span className="text-2xl font-semibold text-[#E6CEA0]">OO</span>
              <span className="text-2xl font-semibold text-black dark:text-gray-200">KIVEL</span>
            </div>
            <ul id="navbar-main" className="menu menu-horizontal hidden lg:flex">
              {/* Navbar menu content here */}
              <li>
                <Link href="/free">
                <a className="text-lg">자유연재</a>
                </Link>
              </li>
              <li>
                <Link href="/premium">
                <a className="text-lg">작가연재</a>
                </Link>
              </li>
              <li>
                <Link href="/review">
                <a className="text-lg">리뷰게시판</a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                <a className="text-lg">이벤트</a>
                </Link>
              </li>
              <li>
                <Link href="/bookshelf">
                <a className="text-lg">내서재</a>
                </Link>
              </li>
            </ul>            
          </div>
          {isLogin ? 
          <div className="flex-none items-center flex">
            {/* anonymous user */}     
            <div className="flex gap-4">
              <button className="btn btn-outline">
              로그인
              </button>
              <button className="btn">회원가입</button>
            </div>
          </div>  
          :
          <div className="flex-none items-center flex">         
            {/* authenticated user */}
            <Link href="/search">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            </Link>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end hidden lg:inline-block">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link href="/notification">
                  <a className="justify-between">
                  알림
                  <span className="badge">New</span>
                  </a>
                  </Link>
                </li>
                <li>
                  <Link href="/storyroom">
                  <a>내 작품관리</a>
                  </Link>
                </li>
                <li>
                  <Link href="/bookshelf">
                  <a>내 서재</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mysetting">
                  <a>설정</a>
                  </Link>
                </li>
                <li>
                  <Link href="/notices">
                  <a>공지사항</a>
                  </Link>
                </li>
                <li>
                  <Link href="/helpcenter">
                  <a>고객센터</a>
                  </Link>
                </li>
                <li>
                  <Link href="/logout">
                  <a>로그아웃</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          }
          </div>
          {children}
          <div className="navbar bg-base-200 lg:hidden">
            <ul id="navbar-mobile" className="w-full menu flex-row justify-between mx-2">
              {/* Navbar menu content here */}
              <li>
                <Link href="/free">
                <a className="text-base">자유연재</a>
                </Link>
              </li>
              <li>
                <Link href="/premium">
                <a className="text-base">작가연재</a>
                </Link>
              </li>
              <li>
                <Link href="/review">
                <a className="text-base">리뷰게시판</a>
                </Link>
              </li>
              <li>
                <Link href="/bookshelf">
                <a className="text-base">내서재</a>
                </Link>
              </li>
            </ul>
          </div>       
    </div>
  )
}