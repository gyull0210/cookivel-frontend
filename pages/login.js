import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import tw from 'twin.macro'
import CcNaver from '../components/core/icon/CcNaver';

const Login = () => {

  return (

    <div tw="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div tw="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div tw="w-full">
          <div tw="text-center">
            <div tw="w-full inline-flex justify-center items-center text-center mb-4">
              <span tw="text-3xl font-bold">C</span>
              <span tw="text-3xl font-bold text-[#E6CEA0]">OO</span>
              <span tw="text-3xl font-bold">KIVEL</span>
            </div>
            <div tw="text-center">
              <p tw="mb-6 font-semibold text-gray-500">SNS로 간편 로그인</p>
              <div tw="flex gap-6 justify-center mb-4">
                <button type="button" tw="flex items-center p-3 bg-white justify-center border border-gray-200 rounded-full">
                  <span css={[tw`text-2xl`]}><FcGoogle/></span>
                </button>
                <button type="button" tw="flex items-center p-3 bg-[#03C75A] justify-center border border-green-400 rounded-full" >
                  <span tw="text-2xl"><CcNaver/></span>
                </button>
                <button type="button" tw="flex items-center p-3 bg-[#FEE500] justify-center border border-amber-200 rounded-full" >
                  <span css={[tw`text-2xl text-black`]}><RiKakaoTalkFill/></span>
                </button>
              </div>
            </div>
            </div>
            <div tw="my-12"></div>
            <p tw="mt-2 font-semibold text-gray-500 text-center">이메일 계정으로 로그인</p>
        </div>
        <div tw="mt-8">
          <form action="" noValidate className="group">
            <div tw="relative mt-5">
              <input type="email" name="email" id="email" placeholder="이메일" className="peer" tw="w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0]) valid:[&:not(:placeholder-shown)]:(border-green-500 border-2) [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:(border-red-400 border-2)" required pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autoComplete="off" />
              <label htmlFor="email" tw="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">이메일</label>
              <span tw="mt-2 hidden text-sm text-red-400">이메일 형식에 맞게 입력해주세요. </span>
            </div>
            <div tw="relative mt-5">
              <input type="password" name="password" id="password" placeholder="비밀번호" className="peer" tw="w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0]) valid:[&:not(:placeholder-shown)]:(border-green-500 border-2) [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:(border-red-400 border-2)" pattern=".{6,}" required autoCcomplete="off"/>
              <label htmlFor="password" tw="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">비밀번호</label>
              <span tw="mt-2 hidden text-sm text-red-400">비밀번호는 6자리 이상이어야 합니다. </span>
            </div>
            <div tw="my-6">
              <button type="submit" tw="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-neutral-800 focus:outline-none group-invalid:pointer-events-none group-invalid:opacity-70">로그인</button>
            </div>
            <p tw="text-center text-sm text-gray-500">아직 계정이 없으신가요? <Link href="/register"><a href="" tw="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">회원가입</a></Link></p>
            <p tw="text-center text-sm text-gray-500">비밀번호가 기억나지 않으신다면 <Link href="/search"><a href="" tw="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">비밀번호 찾기</a></Link></p>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default Login;