import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import Main from '../components/contents/Main'
import CreateForm from '../components/common/form/storyroom/CreateForm'

export default function StoryCreate(){
  return (
    <div>
      <Head>
        <title>쿠키블-작품 등록</title>
        <meta name="description" content="소설 창작자들의 연재공간" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main>
          <section className="container max-w-screen-lg mx-auto">
            <h3 className="prose-2xl mb-4">작품 등록</h3>
            <CreateForm/>
          </section>
        </Main>
      </Layout>
    </div>
  )
}