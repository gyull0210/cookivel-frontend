import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiOutlineX } from 'react-icons/hi2'
import tw from 'twin.macro'

const ShareModal = (props) => {

  const { isOpen, onClose } = props;

  return (
    <Dialog open={isOpen} onClose={() => onClose} tw="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60]">
      <Dialog.Panel tw="flex relative flex-col w-96 h-full bg-white py-6 px-4 border border-gray-200 rounded-lg">
        <Dialog.Title tw="text-xl font-semibold text-center mb-12">공유하기</Dialog.Title>
        <div tw="flex justify-center gap-12">
          <div tw="w-12 h-12 border rounded-lg"></div>
          <div tw="w-12 h-12 border rounded-lg"></div>
          <div tw="w-12 h-12 border rounded-lg"></div>
          <div tw="w-12 h-12 border rounded-lg"></div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default ShareModal;