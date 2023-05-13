import tw from 'twin.macro'
import { useState, useRef, useEffect } from 'react'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import { HiArrowLeft } from 'react-icons/hi2'
import Spinner from '../../../components/core/spinner/Spinner'
import { css } from '@emotion/react'
import { router } from 'next/router'

const ReactQuill = dynamic( () => import('react-quill'), {
    ssr : false,
    loading: () => (
      <div tw="w-full h-full flex justify-center items-center">
        <Spinner/>
      </div>
    ),
})
 
const modules = {
  toolbar: [
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
    ],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const formats = [
  'font',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list'
]

const CreateChapter = () => {

  const [value, setValue] = useState('');

  const editorStyles = css`
    .ql-editor {
    min-height: 48rem;
    }
  `

  return (
    <div>
      <header tw="py-2">
        <nav tw="max-w-screen-lg flex justify-between items-center mx-auto">
          <div tw="relative w-1/3">
            <button tw="p-3 rounded-full" type="button" onClick={()=>history.go(-1)}>
              <HiArrowLeft tw="text-2xl text-gray-400"/>
            </button>
          </div>
          <div tw="text-center text-xl w-1/3">
            1화 등록
          </div>
          <div tw="relative text-end w-1/3">
            <button tw="p-3 text-lg font-bold rounded-full">
            임시저장
            </button>
            <button tw="p-3 text-xl font-bold rounded-full" type="button" onClick={()=>router.push("/storyroom/chapters/chapterList")}>
            등록
            </button>
          </div>
        </nav>
      </header>
      <div tw="max-w-screen-lg mx-auto">
        <ReactQuill
          css={editorStyles}
          theme="snow"
          modules={modules}
          formats={formats}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  )
}

export default CreateChapter;