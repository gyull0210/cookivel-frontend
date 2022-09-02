import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../../components/layout/viewer/Layout'
import Main from '../../../components/layout/viewer/Main'

export default function Register(){
  return (
    <div>
    <Head>
      <title>쿠키블-뷰어</title>
      <meta name="description" content="소설 창작자들의 연재공간" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>     
      <Main>
      </Main>
    </Layout>
    </div>
  )
}