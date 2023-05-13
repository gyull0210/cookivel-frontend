import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi2'
import tw from 'twin.macro'

const FilterModal = (props) => {

  const { isOpen, onClose, onClick } = props;

  return (
    <Dialog open={isOpen} onClose={() => onClose} tw="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60]">
      <Dialog.Panel tw="flex relative flex-col w-96 h-full bg-white py-6 px-4 border border-gray-200 rounded-lg">
        <Dialog.Title tw="text-xl font-semibold text-center mb-4">필터 설정</Dialog.Title>
        <div tw="mb-4">
          <form>
            <div tw="">
              <input type="radio"/>
            </div>
          </form>
        </div>  
        <div tw="flex gap-6">
          <button tw="w-full bg-white px-6 py-2 text-gray-400 border border-gray-400 rounded-lg" onClick={() => onClose}>취소</button>
          <button tw="w-full bg-black px-6 py-2 text-white rounded-lg" onClick={onClick}>설정완료</button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default FilterModal;