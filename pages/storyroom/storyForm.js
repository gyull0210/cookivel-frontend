import tw from 'twin.macro'
import { css } from '@emotion/react'
import { HiPhoto } from 'react-icons/hi2';
import { useCallback, useEffect, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Controller, useForm } from 'react-hook-form';
import ImgUploadForm from './imgUploadForm';
import CropperModal from './cropperModal';
import Toggle from './Toggle';
import TagsInput from './TagsInput';
import Portal from '../portal';
import ErrorModal from './errorModal';

const StoryForm = () => {

  const [enabled, setEnabled] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const errorMsg = "이게뭐노";

  const handleErrorModal = () => {
    setIsOpenErrorModal(!isOpenErrorModal)
  }

  const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
  const onSubmit = data => console.log(data);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleOpenUploadModal = () => {
    setIsUploadModalOpen(!isUploadModalOpen)
  }

  const [cropData, setCropData] = useState("")

  const tagsInputRef = useRef(null);
  
  const whitelist = ['판타지', '현대판타지', '로맨스', '로맨스판타지', 'BL', 'GL', '호러'];
  

  return (
    <div tw="max-w-screen-lg mx-auto py-6">
      <form 
        className="group"
        tw="w-full flex flex-col lg:flex-row items-center lg:items-stretch px-4 gap-6"
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <div tw="w-[300px] relative flex flex-col items-center mb-4 lg:py-6">
          {/* <ImgUploadForm/> */}
          {/*  */}
          <div tw="relative w-48 h-64 flex flex-col items-center place-content-center overflow-hidden">
          {cropData && (
          <div tw="relative w-full h-full">
            <div tw="absolute block rounded-lg overflow-hidden inset-0">
              <img tw="absolute inset-0 block w-full h-full min-w-[100%] min-h-[100%] object-cover" src={cropData} alt="표지"/>
            </div>
          </div>
          )}
            <button 
              type="button" 
              tw="block absolute z-10 bg-gray-200 flex flex-col place-content-center items-center justify-center w-48 h-64 rounded-lg overflow-hidden py-2 px-4 hover:bg-gray-200 active:bg-gray-300"
              css={cropData && tw`opacity-0 hover:opacity-90`}
              onClick={() => handleOpenUploadModal()}
            >
              <HiPhoto tw="w-12 h-12 fill-gray-400"/>
              <span tw="block text-sm text-gray-400 select-none">이미지 업로드</span>
            </button>   
          </div>
          <span tw="my-4 text-sm text-gray-400">이미지 200 x 300 이상</span> 
          {cropData && (<button tw="px-4 py-2 rounded-lg bg-gray-200" type="button" onClick={() => setCropData("")}>삭제</button>)}                  
        </div>
        <div tw="w-full flex flex-col gap-6">
          <div tw="w-full relative">
            <label tw="block" htmlFor="title">제목</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              placeholder="제목" 
              className="peer" 
              tw="w-full rounded-md border border-gray-300 px-3 py-2 shadow shadow-gray-100 placeholder:text-gray-400 focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0]) valid:[&:not(:placeholder-shown)]:(border-green-500 border-2) [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:(border-red-400 border-2)" 
              required pattern=""
              maxLength="20"
              autoComplete="off"
              {...register("title", { required: true, maxLength: 20 })}
            />
            <span tw="mt-2 hidden text-sm text-red-400">제목의 형식에 맞지 않습니다</span>
            <span tw="block mt-2 text-sm text-gray-400">최대 20자까지 입력할 수 있습니다. </span>
          </div>
          
          <div tw="relative">
            <label tw="mr-2" htmlFor="length">작품 길이</label>
            <div tw="flex items-center gap-6">
              <div tw="relative flex items-center">     
                <input 
                  id="short" 
                  tw="w-6 h-6 border border-gray-300 text-[#E6CEA0] shadow shadow-gray-100 focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0])" 
                  name="length" 
                  type="radio"
                  value="단편"
                  {...register("length")}
                />
                <label tw="ml-2" htmlFor="short">단편</label>
              </div>
              <div tw="relative flex items-center">
                <input 
                  id="long" 
                  tw="w-6 h-6 border border-gray-300 text-[#E6CEA0] shadow shadow-gray-100 focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0])" 
                  name="length" 
                  type="radio"
                  value="장편"
                  {...register("length")}
                />
                <label tw="ml-2" htmlFor="long">장편</label>
              </div>   
            </div>
          </div>
          <div tw="relative">
            <label tw="mr-2" htmlFor="series">연재 상태</label>
            <div tw="flex items-center gap-6">
              <div tw="relative flex items-center">     
                <input 
                  id="ing" 
                  tw="w-6 h-6 border border-gray-300 text-[#E6CEA0] shadow shadow-gray-100 focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0])" 
                  name="length" 
                  type="radio"
                  value="연재중"
                  {...register("series")}
                />
                <label tw="ml-2" htmlFor="ing">연재중</label>
              </div>
              <div tw="relative flex items-center">
                <input 
                  id="end" 
                  tw="w-6 h-6 border border-gray-300 text-[#E6CEA0] shadow shadow-gray-100 focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0])"
                  name="length" 
                  type="radio"
                  value="완결"
                  {...register("series")}
                />
                <label tw="ml-2" htmlFor="end">완결</label>
              </div>   
            </div>
          </div>
          
          <div tw="relative">
            <label tw="mr-2" htmlFor="tags">태그</label>            
            {/* <TagsInput /> */}
            
          </div>
          <div tw="relative">
            <label tw="block" htmlFor="description">설명</label>
            <TextareaAutosize 
              type="text" 
              id="description" 
              name="description" 
              placeholder="설명" 
              className="peer" 
              minRows={5} 
              tw="w-full rounded-md border border-gray-300 px-3 py-2 shadow shadow-gray-100 placeholder:text-gray-400 focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0]) valid:[&:not(:placeholder-shown)]:(border-green-500 border-2) [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:(border-red-400 border-2) resize-none" 
              required
              autoComplete="off"
              {...register("description", { required: true, maxLength: 300 })}
            />
            {errors.description?.required && <span tw="mt-2 hidden text-sm text-red-400">설명은 300자 이내로 작성해주세요.</span>}
            <span tw="mt-2 text-sm text-gray-400">최대 300자까지 입력할 수 있습니다. </span>      
          </div>
          <div tw="relative">
            <label tw="mr-2" htmlFor="isPublic">공개유무</label>
            {/* <Controller
              name="isPublic"
              control={control}
              defaultValue={false}
              as={
              <Toggle 
                id="isPublic" 
                name="isPublic" 
                checked={toggle} 
                onChange={(e)=>setToggle(e.target.checked)}
              />}
            /> */}
            <Toggle 
              id="isPublic" 
              name="isPublic" 
              checked={toggle} 
              onChange={(e)=>setToggle(e.target.checked)}
            />
          </div>
          <div tw="relative">
            <label tw="mr-2" htmlFor="funding">후원가능유무</label>
            {/* <Controller
              name="funding"
              control={control}
              defaultValue={false}
              as={               
              <Toggle
                id="funding"
                name="funding"
                checked={enabled}
                onChange={(e)=>setEnabled(e.target.checked)}
              />}
            />            */}
            <Toggle
              id="funding"
              name="funding"
              checked={enabled}
              onChange={(e)=>setEnabled(e.target.checked)}
            />
          </div>
          <div tw="relative flex gap-6">
            <button tw="w-full py-3 px-6 bg-gray-100 border-gray-300 rounded-lg" type="reset">취소</button>
            <button tw="w-full py-3 px-6 bg-black text-white rounded-lg" type="submit" onClick={handleSubmit(onSubmit)}>등록</button>
          </div>
        </div>
      </form>
      {isUploadModalOpen && 
      <CropperModal
        isOpen={isUploadModalOpen}
        onClose={setIsUploadModalOpen} 
        onClick={handleOpenUploadModal}       
        cropData={cropData}
        setCropData={setCropData}
      />}
        <ErrorModal
          errors={errorMsg}
          isOpen={isOpenErrorModal} 
          onClose={setIsOpenErrorModal} 
          onClick={handleErrorModal}
        />
    </div>
  )
}

export default StoryForm;