import Image from 'next/image';
import { useDeferredValue, useEffect, useState } from 'react';
import tw from 'twin.macro'

const Detail = () => {
  
  const url = "https://api.lorem.space/image/book?w=200&h=300";

  const [cover,setCover] = useState([]);

  useEffect(() => {
  const getBook = async() => {
    const res = await fetch("https://api.lorem.space/image/book?w=200&h=300")
    .then(res => setCover(cover))
  }

  getBook();
  console.log(cover);
  },[cover])
  
  return (
    <>
      <head>

      </head>

      <header tw="h-48"></header>

      <main tw="max-w-screen-lg container mx-auto">
        <section tw="">
          <div tw="flex">
            <div tw="w-[200px] h-[300px] rounded-lg overflow-hidden border mr-8">
              <Image tw="w-full h-full object-center object-cover" src={url} alt="bookcover" width={200} height={300}/>
            </div>
            <div tw="">
              <div tw="">
                <div tw="">
                  <div tw="bg-green-400 text-white rounded-t-full rounded-r-full">연재중</div>
                </div>
                <h1 tw="text-3xl font-bold">장르 | 제목입니다</h1>
                <span tw="">작가이름</span><span tw="">총 XX 화</span>
              </div>
              <div tw="">
                작품 소개입니다
              </div>
              <div tw="">
                <div tw="">작품태그</div>
              </div>
              <div tw="flex">
                <div tw="">
                  <button type="button" tw="px-4 py-2 h-10 bg-black text-white rounded-lg">첫 화 읽기</button>
                </div>
                <div tw=""></div>
              </div>
            </div>
          </div>
        </section>
        <section tw=""></section>
      </main>

      <footer></footer>
    </>
  )
}

export default Detail;