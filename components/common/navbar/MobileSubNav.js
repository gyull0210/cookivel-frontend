
export default function MobileSubNav(){
  return (
    <div className="navbar bg-base-200 lg:hidden">
      <ul id="navbar-mobile" className="w-full menu flex-row justify-between mx-2">
        {/* Navbar menu content here */}
        <li><a className="text-base">자유연재</a></li>
        <li><a className="text-base">작가연재</a></li>
        <li><a className="text-base">리뷰게시판</a></li>
        <li><a className="text-base">내서재</a></li>
      </ul>
    </div>
  )
}