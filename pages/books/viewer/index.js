import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../../components/layout/viewer/Layout'
import Main from '../../../components/layout/viewer/Main'
import Footer from '../../../components/layout/viewer/Footer'
import {useState, useRef } from 'react'

export default function Viewer({children}) {

  const [modalShow, setModalShow] = useState(false);
  const [commentShow, setCommentShow] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  
  const handleModal = () => {
    setModalShow(!modalShow);
  }
  const handleCommentShow = () => {
    setCommentShow(!commentShow);
  }

  return (
    <div>
    <Head>
      <title>쿠키블-뷰어</title>
      <meta name="description" content="소설 창작자들의 연재공간" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>     
      <Main>
        <div className="container max-w-screen-2xl mx-auto">
          {children}
        </div>       
      </Main>     
      {/* drawer reply */}
      <div className={`${commentShow && "z-50"} drawer drawer-end top-0 fixed`}>
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" checked={commentShow} onChange={handleCommentShow} />
        <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
      <Footer handleCommentShow={handleCommentShow}/>       
      {/* modal */}
      <input type="checkbox" id="my-modal-2" className="modal-toggle" checked={modalShow} onChange={handleModal}/>
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box relative">
            <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold mb-4">뷰어 설정</h3>
            <div className="mb-8">
              <div className="mb-4">
                <h4 className="mb-4">테마색 설정</h4>
                <div className="flex flex-row gap-4 items-center">
                  <div className="w-10 h-10 border rounded-lg bg-white"></div>
                  <div className="w-10 h-10 border rounded-lg bg-gray-400"></div>
                  <div className="w-10 h-10 border rounded-lg bg-gray-600"></div>
                  <div className="w-10 h-10 border rounded-lg bg-black"></div>
                  <div className="w-10 h-10 border rounded-lg bg-[#d8e5c9]"></div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="mb-4">폰트 크기 설정</h4>
                <div className="flex flex-row gap-4 items-center">
                  <div className="flex items-center w-10 h-10 border rounded-lg text-sm">
                    <span className="mx-auto">가</span>
                  </div>
                  <div className="flex items-center w-10 h-10 border rounded-lg text-base">
                    <span className="mx-auto">가</span>
                  </div>
                  <div className="flex items-center w-10 h-10 border rounded-lg text-lg">
                    <span className="mx-auto">가</span>
                  </div>
                  <div className="flex items-center w-10 h-10 border rounded-lg text-xl">
                    <span className="mx-auto">가</span>
                  </div>
                  <div className="flex items-center w-10 h-10 border rounded-lg text-2xl">
                    <span className="mx-auto">가</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="mb-4">폰트 굵기 설정</h4>
                <div className="flex flex-row gap-4 items-center">
                  <div className="flex items-center w-10 h-10 border rounded-lg text-lg font-normal">
                    <span className="mx-auto">가</span>
                  </div>
                  <div className="flex items-center w-10 h-10 border rounded-lg text-lg font-semibold">
                    <span className="mx-auto">가</span>
                  </div>
                  <div className="flex items-center w-10 h-10 border rounded-lg text-lg font-extrabold">
                    <span className="mx-auto">가</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="btn btn-outline" type="reset" onClick={handleModal}>
                취소
              </button>
              <div className="modal-action">
                <button className="btn" onClick={handleModal}>
                확인
                </button>
              </div>         
            </div>
          </div>
        </div>
    </Layout>
    </div>
  )
} 

// export async function getServerSideProps(){
  
//   const res = await fetch("https://en.wikipedia.org/w/api.php")
//   const wiki = await res.json()
  
//   return {
//     props: {
//       wiki,
//     }   
//   }
// }

