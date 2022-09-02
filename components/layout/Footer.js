import Link from 'next/link'

export default function Footer() {
  return (
    <footer  className="footer p-10 bg-base-200 text-base-content rounded-lg"> 
      <div className="grid-flow-col">
        <span className="footer-title">사이트에 게시된 컨텐츠는 저작권자의 권리가 있는 컨텐츠로서 무단 복제, 전송, 수정, 배포는 법적 처벌을 받을 수 있습니다.</span> 
      </div>
      <div className="items-center grid-flow-col">
        <Link href="/termofuse">
          <a className="link link-hover">이용약관</a>
        </Link>
        <Link href="/privacypolicy">
          <a className="link link-hover">개인정보활용방침</a>
        </Link>
        <Link href="/cookiepolicy">
          <a className="link link-hover">쿠키정책</a>
        </Link>
      </div>
      <div className="grid-flow-col items-center gap-4 md:place-self-center md:justify-self-end">
        <div className="flex items-center">
          <span className="text-3xl font-semibold text-black dark:text-gray-200">C</span>
          <span className="text-3xl font-semibold text-[#E6CEA0]">OO</span>
          <span className="text-3xl font-semibold text-black dark:text-gray-200">KIVEL</span>
        </div>
        <p>Copyright(c) 2022 쿠키블. All rights reserved.</p>
      </div>
    </footer>
  )
}