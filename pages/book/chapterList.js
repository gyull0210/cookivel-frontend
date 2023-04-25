import { HiOutlineXMark } from 'react-icons/hi2';
import tw from 'twin.macro'

const ChapterList = (props) => {

  const { chapter } = props;

  return (
    <div>
      <div tw="h-[800px] overflow-y-scroll overscroll-none scrollbar-hide">
        <a href="" tw="block px-4 py-2 border-b border-gray-200">목차입니다</a>
            
      </div>
      <div tw="mt-4 flex gap-4 justify-center px-2 py-4 bg-gray-200 text-gray-700 rounded-lg overflow-x-auto overflow-y-hidden whitespace-nowrap">
        <a href="###" tw="block font-medium focus:(font-semibold text-amber-600) cursor-pointer">1-100</a>
        <a href="###" tw="block font-medium focus:(font-semibold text-amber-600) cursor-pointer">100-200</a>
        <a href="###" tw="block font-medium focus:(font-semibold text-amber-600) cursor-pointer">200-300</a>
        <a href="###" tw="block font-medium focus:(font-semibold text-amber-600) cursor-pointer">400-500</a>
      </div>
    </div>
  )
}

export default ChapterList;