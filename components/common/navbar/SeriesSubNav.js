
export default function SeriesSubNav(){
  return (
    <div className="max-w-screen-2xl mx-auto bg-base-200 flex mt-4 lg:mt-0 xl:rounded-lg">
      <ul id="navbar-sub" className="w-full menu menu-horizontal flex-row items-center">
        {/* Navbar menu content here */}
        <li className="w-1/3">
          <a className="w-full text-base">
            <div className="mx-auto">전체</div>
          </a>
        </li>
        <li className="w-1/3">
          <a className="w-full text-base">
            <div className="mx-auto">신작</div>
          </a>
        </li>
        <li className="w-1/3">
          <a className="w-full text-base">
            <div className="mx-auto">완결</div>
          </a>
        </li>
      </ul>
    </div>
  )
}