import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout/Layout'
import Main from '../../components/contents/Main'
import Footer from '../../components/layout/Footer'
import {HiOutlineFilter} from 'react-icons/hi'

export default function StoryRoom(){
  const href = "/storyCreate"

  const handleCreate = () => {
    return href;
  }
  return (
    <div>
      <Head>
        <title>쿠키블-스토리룸</title>
        <meta name="description" content="소설 창작자들의 연재공간" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main>
          <nav className="max-w-screen-2xl mx-auto bg-base-200 flex lg:rounded-lg">
            <ul id="navbar-sub" className="w-full menu menu-horizontal flex-row items-center">          
              <li className="w-1/3">
                <a className="w-full text-base">
                  <div className="mx-auto">내 작품</div>
                </a>
              </li>
              <li className="w-1/3">
                <a className="w-full text-base">
                  <div className="mx-auto">후원 관리</div>
                </a>
              </li>
              <li className="w-1/3">
                <a className="w-full text-base">
                  <div className="mx-auto">정산 통계</div>
                </a>
              </li>
            </ul>
          </nav>
          <section>
            <div className="flex items-center justify-end mb-4">
              <Link href="/storyCreate">
              <button className="btn" type="button" onClick={handleCreate}>
                작품등록
              </button>
              </Link>
            </div>
            <div>
              <h3 className="prose-2xl">작품 관리</h3>
            </div>
          </section>
          <section className="mb-4">
            <div className="h-12 flex items-center justify-between bg-base-200 rounded-lg px-2">
              <div className="flex">
                <span className="text-xl">
                  <HiOutlineFilter/>
                </span>
                정렬
              </div>
              <div>

              </div>
            </div>
          </section>
          <section className="h-screen">

          </section>
        </Main>
        <Footer/>
      </Layout>
    </div>
  )
}