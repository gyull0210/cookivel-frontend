import tw from 'twin.macro'
import TextField from './storyroom/forms/textField/TextField';

const Register = () => {

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
            <div tw="text-2xl font-semibold text-center">
              회원가입
            </div>
            <div tw="mt-8">
              <form action="" noValidate className="group">
                <div tw="relative mt-5">
                  <input type="email" name="email" id="email" placeholder="이메일" className="peer" tw="w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0]) valid:[&:not(:placeholder-shown)]:(border-green-500 border-2) [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:(border-red-400 border-2)" required pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autoComplete="off"/>
                  <label htmlFor="email" tw="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">이메일</label>
                  <span tw="mt-2 hidden text-sm text-red-400">이메일 형식에 맞게 입력해주세요. </span>
                </div>
                <div tw="relative mt-5">
                  <input type="text" name="nickname" id="nickname" placeholder="닉네임" className="peer" tw="w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0]) valid:[&:not(:placeholder-shown)]:(border-green-500 border-2) [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:(border-red-400 border-2)" pattern=".{2,}" required />
                  <label htmlFor="nickname" tw="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">닉네임</label>
                  <span tw="mt-2 hidden text-sm text-red-400">닉네임은 2글자 이상이어야 합니다. </span>
                </div>
                <div tw="relative mt-5">
                  <input type="password" name="password" id="password" placeholder="비밀번호" className="peer" tw="w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0]) valid:[&:not(:placeholder-shown)]:(border-green-500 border-2) [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:(border-red-400 border-2)" pattern=".{6,}" required />
                  <label htmlFor="password" tw="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">비밀번호</label>
                  <span tw="mt-2 hidden text-sm text-red-400">비밀번호는 6자리 이상이어야 합니다. </span>
                </div>
                <div tw="relative mt-5">
                  <TextField type="text" id="code" name="code" placeholder="코드" errorMessage="코드가 유효하지 않습니다." />
                </div>
                <div tw="my-6">
                  <div tw="relative flex">
                    <input type="checkbox" name="" id="term" tw="w-6 h-6 text-[#E6CEA0] border border-gray-300 shadow shadow-gray-100 rounded focus:ring-transparent mr-2"/>
                    <p tw="text-center text-base text-gray-500">
                      <label htmlFor="term" tw="">사이트 이용약관에 동의합니다 </label>
                      <a href="/rule" tw="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">상세보기</a>
                    </p>
                  </div>
                  <div tw="relative flex mt-5">
                    <input type="checkbox" name="" id="privacy" tw="w-6 h-6 text-[#E6CEA0] border border-gray-300 shadow shadow-gray-100 rounded focus:ring-transparent mr-2"/>
                    <p tw="text-center text-base text-gray-500">
                      <label htmlFor="privacy" tw="">개인정보이용정책에 동의합니다 </label>
                      <a href="/policy" tw="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">상세보기</a>
                    </p>
                  </div>
                </div>
                <div tw="my-6">
                  <button type="submit" tw="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-neutral-800 focus:outline-none group-invalid:pointer-events-none group-invalid:opacity-70">회원가입</button>
                </div>                
              </form> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;