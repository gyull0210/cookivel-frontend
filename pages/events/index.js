import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout/Layout'
import Main from '../../components/contents/Main'
import Footer from '../../components/layout/Footer'

export default function Events(){
  return (
    <div>
    <Head>
      <title>쿠키블-이벤트</title>
      <meta name="description" content="소설 창작자들의 연재공간" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Main>

      </Main>
      <Footer/>
    </Layout>
    </div>
  )
}