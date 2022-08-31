
export default function Carousel(){
  return (
    <>
    <div className="carousel carousel-center mw-screen-2xl p-4 space-x-6 rounded-box">
      <div id="item1" className="carousel-item w-[580px]">
        <img src="https://placeimg.com/580/300/arch" className="rounded-box" />
      </div>
      <div id="item2" className="carousel-item w-[580px]">
        <img src="https://placeimg.com/580/300/arch" className="rounded-box" />
      </div>
      <div id="item3" className="carousel-item w-[580px]">
        <img src="https://placeimg.com/580/300/arch" className="rounded-box" />
      </div>
      <div id="item4" className="carousel-item w-[580px]">
        <img src="https://placeimg.com/580/300/arch" className="rounded-box" />
      </div>
      <div id="item5" className="carousel-item w-[580px]">
        <img src="https://placeimg.com/580/300/arch" className="rounded-box" />
      </div>
      <div id="item6" className="carousel-item w-[580px]">
        <img src="https://placeimg.com/580/300/arch" className="rounded-box" />
      </div>
      <div id="item7" className="carousel-item w-[580px]">
        <img src="https://placeimg.com/580/300/arch" className="rounded-box" />
      </div>
      <div id="item8" className="carousel-item w-[580px]">
        <img src="https://placeimg.com/580/300/arch" className="rounded-box" />
      </div>
      <div id="item9" className="carousel-item w-[580px]">
        <img src="https://placeimg.com/580/300/arch" className="rounded-box" />
      </div>
  </div>
  <div className="flex justify-center py-2 gap-2">
    <a href="#item1" className="btn btn-xs">1</a> 
    <a href="#item2" className="btn btn-xs">2</a> 
    <a href="#item3" className="btn btn-xs">3</a> 
    <a href="#item4" className="btn btn-xs">4</a>
    <a href="#item5" className="btn btn-xs">5</a>
    <a href="#item6" className="btn btn-xs">6</a>
    <a href="#item7" className="btn btn-xs">7</a>
    <a href="#item8" className="btn btn-xs">8</a>
    <a href="#item9" className="btn btn-xs">9</a>
  </div>
  </>
  )
}