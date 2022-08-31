import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout/Layout'
import Main from '../../components/contents/Main'
import SeriesSubNav from '../../components/common/navbar/SeriesSubNav'

import { HiOutlineFilter } from 'react-icons/hi'

export default function FreeSeries(){
  return (
    <div>
    <Head>
      <title>쿠키블-자유연재</title>
      <meta name="description" content="소설 창작자들의 연재공간" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Layout>
        <Main>
          <section className="pt-10">
            {/* 광고 */}
            <SeriesSubNav/>
            {/* 필터링 */}
            <div className="mt-10 h-14 bg-base-200">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <button className="btn btn-ghost btn-cirle">
                <span className="text-xl">
                  <HiOutlineFilter/>
                </span>
              </button>
            </div>
            {/* 작품리스트 */}
            {/* 페이지네이션 */}
          </section>
        </Main>
      </Layout>
    </div>
  )
}