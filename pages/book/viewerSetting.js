import tw from 'twin.macro';
import React, { useState } from 'react';
import { HiXOutline } from 'react-icons';
import { Dialog } from '@headlessui/react';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi2';

const ViewerSetting = React.forwardRef((props, ref) => {

  const {isSettingOpen, fontStyle, increaseFontSize, decreaseFontSize, handleSettingSave, ...rest} = props;

  return (
    <Dialog open={isSettingOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>뷰어 설정</Dialog.Title>
        <Dialog.Description>
          배경색과 글씨 크기를 주절할 수 있습니다.
        </Dialog.Description>
        <div>
        <div tw="">
          <div tw="">배경색</div>
            <div tw="flex gap-6">
              {/* <div tw="w-12 h-12 bg-white border rounded-lg" onClick={()=> {setBgColor(tw`bg-white`); setTextColor(tw`text-black`);}}></div>
              <div tw="w-12 h-12 bg-black border rounded-lg" onClick={()=> {setBgColor(tw`bg-black`); setTextColor(tw`text-white`);}}></div>
              <div tw="w-12 h-12 bg-green-200 border rounded-lg" onClick={()=> {setBgColor(tw`bg-[#CCEDDB]`); setTextColor(tw`text-black`);}}></div> */}
            </div>
          </div>
          <div tw="mb-4">
            <div tw="">글씨크기</div>
            <div tw="flex items-center gap-6">
              <button tw="flex justify-center items-center w-10 h-10 border rounded-full" onClick={decreaseFontSize}><HiOutlineMinus tw="w-6 h-6 stroke-gray-600"/></button>
              <div id="fontView" css={fontStyle}>가</div>
              <button tw="flex justify-center items-center w-10 h-10 border rounded-full" onClick={increaseFontSize}><HiOutlinePlus tw="w-6 h-6 stroke-gray-600"/></button>
            </div>
          </div>
          <div>
            <button tw="w-full bg-black px-6 py-2 text-white rounded-lg" type="button" onClick={handleSettingSave}>설정 저장</button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
})

ViewerSetting.displayName = "ViewerSetting"

export default ViewerSetting;