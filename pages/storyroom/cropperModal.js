import tw from 'twin.macro';
import { Dialog } from "@headlessui/react";
import { forwardRef, useRef, useState } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { faker } from '@faker-js/faker';

/**
 * @description
 * 이미지를 업로드하고 크롭하는 모달 요소
 * 
 * 
 */
const CropperModal = (props) => {
  
  const {cropData, setCropData, isOpen, onClose, onClick} = props;
  const [bookImg, setBookImg] = useState("")
  const cropperRef = useRef(null); 

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

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setBookImg(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  faker.seed(10)
  const fakerUrl = faker.image.urlLoremFlickr({width: 1000, height:700, category:"cat"})

    
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
    onClick();
  };

  
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCropData(cropper.getCroppedCanvas().toDataURL());
    onClick();
  };

  return (
    <Dialog open={isOpen} onClose={() => onClose} tw="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60]">
      <Dialog.Panel tw="flex relative flex-col lg:w-96 bg-white py-6 px-4 border border-solid border-gray-200 rounded-lg">
        <div tw="flex justify-between lg:justify-center items-center mb-4">
          <div tw="relative">
            <button tw="font-bold hidden">취소</button>
          </div> 
          <Dialog.Title tw="text-xl font-semibold text-center">이미지 업로드</Dialog.Title>
          <div tw="relative">
            <button tw="font-bold hidden">자르기</button>
          </div>
        </div>
        <div tw="flex justify-center mb-4">
          <input 
            tw="px-6 py-2 border border-gray-300 rounded-lg" 
            type="file" 
            accept="image/jpg, image/jpeg, image/png, image/webp"
            onChange={onChange}
          />
        </div>
        <span tw="text-gray-400 text-sm">* 파일형식은 jpg, jpeg, png, webp 파일만 가능합니다.</span>
        <div tw="mb-4">
          <Cropper
            tw="w-full h-64"
            src={bookImg}
            ref={cropperRef}
            zoomTo={0.5}
            initialAspectRatio={2 / 3}
            viewMode={1}
            dragMode="move"
            background={false}
            responsive={true}
            cropBoxMovable={false}
            cropBoxResizable={false}
            autoCropArea={1}
            guides={false}
          />
        </div>  
        <div tw="w-full flex justify-between gap-6">
          <button tw="w-full bg-white px-6 py-2 text-gray-400 border border-gray-400 rounded-lg" onClick={onClick}>취소</button>
          <button tw="w-full bg-black px-6 py-2 text-white rounded-lg" onClick={onCrop}>자르기</button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default CropperModal;