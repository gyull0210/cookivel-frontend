import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout'
import Footer from '../components/layout/Footer'
import Main from '../components/contents/Main'
import BookList from '../components/common/booklist/BookList'
import Carousel from '../components/common/carousel/Carousel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>쿠키블</title>
        <meta name="description" content="소설 창작자들의 연재공간" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Main>
          <section className="pt-4">
            <Carousel/>
          </section>
          <section className="flex flex-col mb-4">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold">최근 연재작</h1>
            </div>
            <div className="flex flex-col flex-wrap md:flex-row lg:flex-row">
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            </div>
          </section>
          <section className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold">인기 연재작</h1>
            </div>
            <div className="flex flex-col flex-wrap md:flex-row lg:flex-row">
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <img className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <img className="rounded" src="https://placeimg.com/100/150/arch" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6">
              <div className="flex gap-4">
                <div className="relative overflow-hidden">
                  <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-lg">연재제목</span>
                    <span>닉네임</span>
                  </div>
                <div className="flex flex-col">
                  <p>작품 소개</p>
                  <div className="flex">
                    <span>조회 10</span>
                    <span>추천 1</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            </div>
          </section>
        </Main>
        <Footer/>
      </Layout>
    </div>
  )
}
