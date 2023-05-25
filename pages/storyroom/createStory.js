import { useState } from 'react';
import tw from 'twin.macro'
import { css } from '@emotion/react'
import { HiPhoto } from 'react-icons/hi2';

const CreateStory = () => {

  const [enabled, setEnabled] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <main tw="flex flex-col mt-12 overflow-x-hidden">    
        <section tw="container mx-auto mt-12">
          <div tw="max-w-screen-lg mx-auto px-2">
            <div tw="w-full border-b border-gray-200 mb-4"/>

            <div tw="w-full flex flex-col md:flex-row py-6 justify-center md:justify-between items-center px-4">
              <div tw="">
                <div tw="">
                  <div tw="block relative mb-4">
                    <label htmlFor="uploadImage" tw="block relative bg-gray-100 flex flex-col items-center justify-center w-32 h-40 rounded-lg overflow-hidden py-2 px-4 hover:bg-gray-200 active:bg-gray-300">
                      <HiPhoto tw="w-8 h-8 fill-gray-400"/>
                      <span tw="block text-sm text-gray-400 select-none">이미지 업로드</span>
                      <input id="uploadImage" tw="hidden" type="file"/>
                    </label>                   
                  </div>
                </div>
                <div tw="flex flex-col gap-6 items-stretch">
                  <form className="group" noValidate>
                    <div tw="relative mb-4">
                      <label tw="mr-2" htmlFor="title">제목</label>
                      <input id="title" tw="px-4 py-2 border border-gray-300 focus:(ring-2 border-green-400 ring-green-400) rounded-lg" type="text"/>              
                    </div>
                    <div tw="mb-4">
                      <label tw="mr-2" htmlFor="description">설명</label>
                      <textarea id="description" tw="px-4 py-2 border border-gray-300 focus:(ring-2 border-green-400 ring-green-400) rounded-lg resize-none" type="text"/>
                    </div>
                    <div tw="mb-4">
                      <label tw="mr-2" htmlFor="length">작품 길이</label>
                      <input id="long" tw="border border-gray-400 text-green-400 focus:(ring-2 border-green-400 ring-green-400)" name="length" type="radio"/>
                      <label tw="ml-2 mr-4" htmlFor="long">장편</label>
                      <input id="short" tw="border border-gray-400 text-green-400 focus:(ring-2 border-green-400 ring-green-400)" name="length" type="radio"/>
                      <label tw="ml-2" htmlFor="short">단편</label>
                    </div>
                    <div tw="mb-4">
                      <label tw="mr-2" htmlFor="visible">공개유무</label>
                      <label htmlFor="toggle1" tw="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer duration-300"
                      css={[enabled ? tw`bg-green-600`: tw``]}
                      >
                      <input id="toggle1" tw="hidden" type="checkbox" checked={enabled} onChange={()=>{setEnabled(!enabled)}}/>
                      <div tw="bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300"
                      css={[
                        enabled ? tw`transform translate-x-5 md:translate-x-6` : tw``
                      ]}
                      ></div>
                     </label>
                    </div>
                    <div tw="mb-4">
                      <label tw="mr-2">완결유무</label>
                      <label htmlFor="toggle" tw="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer duration-300"
                      css={[enabled ? tw`bg-green-600`: tw``]}
                      >
                      <input id="toggle" tw="hidden" type="checkbox" checked={enabled} onChange={()=>{setEnabled(!enabled)}}/>
                      <div tw="bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300"
                      css={[
                        enabled ? tw`transform translate-x-5 md:translate-x-6` : tw``
                      ]}
                      ></div>
                     </label>
                    </div>
                    <div tw="mb-4">
                      <label tw="mr-2" htmlFor="give">후원가능유무</label>
                      <label htmlFor="toggle2" tw="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer duration-300"
                      css={[toggle ? tw`bg-green-600`: tw``]}
                      >
                      <input id="toggle2" tw="sr-only" type="checkbox" checked={toggle} onChange={()=>{setToggle(!toggle)}}/>
                      <div tw="bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300"
                      css={[
                        toggle ? tw`transform translate-x-5 md:translate-x-6` : tw``
                      ]}
                      ></div>
                     </label>
                    </div>
                    <div tw="mb-4">
                      <label tw="mr-2" htmlFor="tags">태그</label>
                      <input id="tags" tw="px-4 py-2 border border-gray-300 focus:(ring-2 border-green-400 ring-green-400) rounded-lg" type="text"/>
                    </div>
                    <div tw="">
                    

                    </div>

                  </form>               
                </div>
              </div>
            </div>
          </div>
        </section>
        <section tw="max-w-screen-lg mx-auto">
                
        </section>
      </main>
    </div>
  )
}

export default CreateStory;