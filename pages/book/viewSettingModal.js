import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi2'
import tw from 'twin.macro'

const ViewSettingModal = (props) => {

  const { isOpen, onClose, onClick, lightTheme, darkTheme, greenTheme, decreaseFontSize, increaseFontSize, fontStyle } = props;

  return (
    <Dialog open={isOpen} onClose={() => onClose} tw="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60]">
      <Dialog.Panel tw="flex relative flex-col w-96 h-full bg-white py-6 px-4 border border-gray-200 rounded-lg">
        <Dialog.Title tw="text-xl font-semibold text-center">뷰어 설정</Dialog.Title>
          <div tw="flex flex-col">
          <div tw="mb-4">
            <div tw="mb-4">배경색</div>
              <div tw="flex gap-6">
                <div tw="w-12 h-12 bg-white border rounded-lg" onClick={lightTheme}></div>
                <div tw="w-12 h-12 bg-black border rounded-lg" onClick={darkTheme}></div>
                <div tw="w-12 h-12 bg-green-200 border rounded-lg" onClick={greenTheme}></div>
              </div>
            </div>
            <div tw="mb-4">
              <div tw="mb-4">글씨크기</div>
              <div tw="flex items-center gap-6">
                <button tw="flex justify-center items-center w-10 h-10 border rounded-full" onClick={decreaseFontSize}><HiOutlineMinus tw="w-6 h-6 stroke-gray-600"/></button>
                <div id="fontView" css={fontStyle}>가</div>
                <button tw="flex justify-center items-center w-10 h-10 border rounded-full" onClick={increaseFontSize}><HiOutlinePlus tw="w-6 h-6 stroke-gray-600"/></button>
              </div>
            </div>
          </div>
        <button tw="w-full bg-black px-6 py-2 text-white rounded-lg" onClick={onClick}>설정완료</button>
      </Dialog.Panel>
    </Dialog>
  )
}

export default ViewSettingModal;