import { useEffect, useState } from 'react';
import { HiPhoto } from 'react-icons/hi2';
import tw from 'twin.macro'

/**
 * @description
 * 이미지를 업로드하고 미리보기로 보여주는 폼요소
 * 
 * 추가해야 할 것
 * 폼에 업로드 된 파일이 accept 속성의 이미지 확장자가 맞는지
 * 이미지가 200 * 300 보다 큰 사이즈인지
 * 이미지의 비율이 맞는지 체크
 * 
 */
const ImgUploadForm = () => {
  const [bookImg, setBookImg] = useState("");
  const previewImg = (e) => {
    if (e.target.files.length === 0) {  
      return;
    } else {
      const {
        currentTarget: { files },
      } = e;
    let reader = new FileReader();
    reader.onload = function(e){
      setBookImg(e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <>
    <div tw="relative w-48 h-64 flex flex-col items-center place-content-center overflow-hidden">
      {bookImg && (
      <div tw="relative w-full h-full">
        <div tw="absolute block rounded-lg overflow-hidden inset-0">
          <img tw="absolute inset-0 block w-full h-full min-w-[100%] min-h-[100%] object-cover" src={bookImg} alt="표지"/>
        </div>
      </div>
      )}
      <label 
        htmlFor="uploadImage" 
        tw="block absolute z-10 bg-gray-200 flex flex-col place-content-center items-center justify-center w-48 h-64 rounded-lg overflow-hidden py-2 px-4 hover:bg-gray-200 active:bg-gray-300"
        css={bookImg && tw`opacity-0 hover:opacity-90`}
        onChange={previewImg}
      >
        <HiPhoto tw="w-12 h-12 fill-gray-400"/>
        <span tw="block text-sm text-gray-400 select-none">이미지 업로드</span>
        <input id="uploadImage" tw="hidden" type="file" accept="image/webp, image/png, image/jpg, image/jpeg"/>
      </label>     
    </div>
    <span tw="my-4 text-sm text-gray-400">이미지 200 x 300 이상</span> 
    {bookImg && (<button tw="px-4 py-2 rounded-lg bg-gray-200" type="button" onClick={() => setBookImg("")}>삭제</button>)}
    </>
  )
}

export default ImgUploadForm;