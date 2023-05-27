import tw from 'twin.macro';
import { Dialog } from "@headlessui/react";
import { forwardRef, useRef, useState } from "react";
import { faker } from '@faker-js/faker';

/**
 * @description
 * 각종 오류 내용을 전달하는 모달
 * 
 * 
 */
const ErrorModal = (props) => {
  
  const {errors, isOpen, onClose, onClick} = props;

  return (
    <Dialog open={isOpen} onClose={() => onClose} tw="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60]">
      <Dialog.Panel tw="flex relative flex-col w-96 bg-white py-6 px-4 border border-solid border-gray-200 rounded-lg">
        <div tw="flex justify-between lg:justify-center items-center mb-4">
          <Dialog.Title tw="text-xl font-semibold text-center">메세지</Dialog.Title>
        </div>
        <div tw="flex justify-center mb-4">
          {errors}
        </div>  
        <div tw="w-full">
          <button tw="w-full bg-black px-6 py-2 text-white rounded-lg" onClick={onClick}>확인</button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default ErrorModal;