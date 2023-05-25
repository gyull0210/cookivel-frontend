import { router } from 'next/router'
import tw from 'twin.macro'

const ErrorPage = () => {

  return (
    <>
      <div tw="flex items-center justify-center min-h-screen bg-white py-48">
        <div tw="flex flex-col">
          <div tw="relative flex flex-col items-center">
            <div tw="relative h-[300px]">
              <h1 tw="font-jua bg-clip-text bg-cookie object-cover object-center">
                <span tw="text-[16rem] text-transparent tracking-[-0.05em] font-bold">4</span>
                <span tw="text-[16rem] text-transparent tracking-[-0.05em] font-bold">0</span>
                <span tw="text-[16rem] text-transparent font-bold">4</span>
              </h1>    
            </div>
           <div tw="font-bold text-2xl xl:text-6xl lg:text-5xl md:text-4xl mb-12">
                해당 페이지를 찾을 수 없습니다.
            </div>
            <div>
              <button tw="py-6 px-12 bg-black rounded-lg text-white text-lg hover:bg-gray-600" onClick={() => router.push("/")}>메인으로 가기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage